<template>
  <div class="slider-container">
    <ul class="stories-list" ref="slider">
      <li class="stories-item" v-for="(user, ndx) in users" :key="user.id" ref="item" >
        <SliderElem
          :obj="getStoryData(user)"
          :active="slideNdx == ndx"
          :loading="slideNdx == ndx && loading"
          :btnsShown="activeBtns"
          @onNextSlide="handleSlide(ndx + 1)"
          @onPrevSlide="handleSlide(ndx - 1)"
          @onProgressFinish="handleSlide(ndx + 1)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { SliderElem } from '../../components/SliderElem'
import { mapState, mapActions } from 'vuex';

export default {
  components : { SliderElem },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  props:{
    initialSlide:{
      type:Number
    }
  },
  computed: {
    ...mapState({
      users: (state) => state.users.data
    }),
    activeBtns () {
      if (this.btnsShown === false) return []
      if (this.slideNdx === 0) return ['next'];
      if (this.slideNdx === this.users.length - 1) return ['prev'];
      return ['next', 'prev'];
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'users/fetchTrendings',
      fetchReadme: 'users/fetchReadme'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.users[this.slideNdx];
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    moveSlider (slideNdx) {
      const slider = this.$refs.slider;
      const item = this.$refs.item[slideNdx];
      const slideWidth = parseInt(getComputedStyle(item).getPropertyValue('width'), 10);
      this.slideNdx = slideNdx;
      this.sliderPosition = -(slideWidth * slideNdx);
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true;
      this.btnsShown = false;
      try {
       await this.fetchReadmeForActiveSlide() 
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        this.loading = false;
        this.btnsShown = true;
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx);
      await this.loadReadme();
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.users.findIndex(item => item.id === this.initialSlide);
      await this.handleSlide(ndx)
    }
    await this.fetchTrendings();
    await this.loadReadme()
  }
}
</script>

<style lang="scss" src="./Slide.scss" scoped></style>