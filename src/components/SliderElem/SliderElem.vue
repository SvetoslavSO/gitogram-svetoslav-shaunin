<template>
  <div class="card" v-bind:class="{active}">
    <div class="card-content" >
      <template v-if="active">
        <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
          <div class="left-arrow">
              <icon name='leftArrow'/>
          </div>
        </button>
      </template>
      <StoryCard v-bind:active="isActive" :obj="obj" :loading="loading" @onFinish="$emit('onProgressFinish')"/>
      <template v-if="active">
        <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
          <div class="right-arrow" >
            <icon name='rightArrow'/>
          </div>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { StoryCard } from '../StoryCard'

export default {
  name: 'Controls',
  components: {
    StoryCard,
    icon
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  props: {
    obj:{
      type: Object,
      required: true
    },
    active:{
      type:Boolean,
      required: true
    },
    loading:{
      type:Boolean,
      required: true
    },
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    }
  },
  data () {
    return {
      isActive : false
    }
  },
  watch: {
    active () {
      this.isActive = this.active
    }
  },
  mounted () {
    setTimeout(() => {
      this.isActive = this.active
    }, 0)
  }
}
</script>

<style lang="scss" src="./SliderElem.scss" scoped></style>