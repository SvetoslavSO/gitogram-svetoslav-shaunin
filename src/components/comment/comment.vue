<template>
  <div class="c-comment">
    <p>
      <span class="username">{{ user }}</span>
      {{body}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Comment',
    props: {
      user:{
        type: String,
        required: true
      },
      body: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped src="./comment.scss"></style>