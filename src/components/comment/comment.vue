<template>
  <div class="c-comment">
    <p>
      <span class="username">{{ issue.title }}</span>
      {{issue.body}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Comment',
    props: {
      issue: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped src="./comment.scss"></style>
