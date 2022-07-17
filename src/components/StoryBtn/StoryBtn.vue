<template>
  <button ref="followBtn" :class="['story-btn', { active: followed}]" type="submit" @click="follow">
    <span class="story-btn__text">{{followed ? "Unfollow" : "Follow"}} </span>
  </button>
</template>

<script>
  export default {
    name:"StoryBtn",
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