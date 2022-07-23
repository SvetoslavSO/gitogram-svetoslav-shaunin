<template>
  <div class="author">
    <div class="author__photo">
      <img class="img" :src="require(`${author}`)" alt="" />
    </div>
    <div class="author__name">{{ authorName }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    props:{
      author:{
        type: String,
        required: true
      },
      authorName:{
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped src="./Profile.scss"></style>