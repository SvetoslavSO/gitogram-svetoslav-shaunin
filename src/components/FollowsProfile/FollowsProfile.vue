<template>
  <div class="author">
    <div class="author__photo">
      <img class="img" :src="author" alt="" />
    </div>
    <div class="author__desc">
      <div :class="['author__name', user]">{{ authorName }}</div>
      <div class="change__menu">
        <div :class="['author__repos', status ? 'active' : '']" v-if="userRepos" @click="$router.push('profile')">{{ userRepos }} repositories</div>
        <div :class="['author__followings', !status ? 'active' : '']" v-if="profile" @click="$router.push('follows')">{{following}} following</div>
      </div>
      <div class="author__company">{{ company ? company : 'no company' }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FollowsProfile',
    emits: ['changeStatusTrue', 'changeStatusFalse'],
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
      },
      following: {
        type: Number
      },
      status: {
        type: Boolean
      },
      profile: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped src="./FollowsProfile.scss"></style>