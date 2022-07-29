<template>
  <button ref="followBtn" :class="['story-btn', { active: followed}]" type="submit" @click="follow">
    <LoadingComponent class="loading-component" v-if="loading"/>
    <span class="story-btn__text" v-else>{{followed ? "Unfollow" : "Follow"}} </span>
  </button>
</template>

<script>
import { LoadingComponent } from '../../components/LoadingComponent'

  export default {
    name:'StoryBtn',
    components: {
      LoadingComponent
    },
    props: {
      loading:Boolean
    },
    data () {
      return {
        followed :  false
      }
    },
    emits:['onFollow'],
    methods: {
      follow () {
        this.followed = !this.followed
        this.$emit('onFollow', this.followed)
      }
    }
  }
</script>

<style lang="scss" scoped src="./StoryBtn.scss"></style>