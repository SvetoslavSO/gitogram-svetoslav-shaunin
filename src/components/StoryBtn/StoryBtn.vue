<template>
  <button ref="followBtn" :class="['story-btn', { active: following}]" type="submit" @click="follow">
    <LoadingComponent class="loading-component" v-if="loading"/>
    <span class="story-btn__text" v-else>{{following ? "Unfollow" : "Follow"}} </span>
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
      loading:Boolean,
      following:Boolean,
      width: String
    },
    emits:['onFollow'],
    methods: {
      follow () {
        this.$emit('onFollow')
      }
    }
  }
</script>

<style lang="scss" scoped src="./StoryBtn.scss"></style>