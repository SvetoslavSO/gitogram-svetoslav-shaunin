<template>
  <div class="author">
    <div class="author__photo">
      <img class="img" :src="author" alt="" />
    </div>
    <div class="author__desc">
      <div :class="['author__name', user]">{{ authorName }}</div>
      <div class="author__repos" v-if="userRepos">{{ userRepos }} repositories</div>
      <div class="author__company">{{ company ? company : 'no company' }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FollowsProfile',
    props:{
      author:{
        type: String,
        required: true
      },
      authorName:{
        type: String,
        required: true
      },
      userRepos:{
        type: Number
      },
      company: {
        type: String
      },
      user: {
        type:String
      }
    }
  }
</script>

<style lang="scss" scoped src="./FollowsProfile.scss"></style>