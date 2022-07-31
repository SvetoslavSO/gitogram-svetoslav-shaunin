<template>
  <button class="c-story-user-item" @click="$emit('onPress')">
    <div class="avatar">
      <img :src="obj.owner?.avatar_url" class="img"  alt="username avatar" />
    </div>
    <div class="username">{{ obj.owner?.login }}</div>
  </button>
</template>

<script>
  export default {
    props:{
      obj:{
        type: Object,
        required: true
      }
    },
    emits: ['onPress']
  }
</script>

<style lang="scss" scoped src="./storyUserItem.scss"></style>