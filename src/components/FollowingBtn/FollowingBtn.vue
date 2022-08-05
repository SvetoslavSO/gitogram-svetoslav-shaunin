<template>
  <button ref="followBtn" :class="['story-btn', { active: following}]" type="submit" @click="unfollow">
    <LoadingComponent class="loading-component" v-if="loading"/>
    <span class="story-btn__text" v-else>{{following ? "Followed" : "Unfollowed"}} </span>
  </button>
</template>

<script>
import { LoadingComponent } from '../LoadingComponent'

  export default {
    name:'StoryBtn',
    components: {
      LoadingComponent
    },
    props: {
      loading:Boolean,
      following:Boolean,
      width: String
    },
    emits:['onUnfollow'],
    methods: {
      unfollow () {
        this.$emit('onUnfollow')
      }
    }
  }
</script>

<style lang="scss" scoped src="./FollowingBtn.scss"></style>