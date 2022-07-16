<template>
  <div class="c-request-template" :class="dark">
    <h1>title:  {{ title }}</h1>
    <h2>owner: {{ username }}</h2>
    <h3>stars: {{ stars }}</h3>
    <p v-if="description">description: {{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'RequestTemplate',
  props:{
    title: String,
    username: String,
    stars: Number,
    description: String,
    dark: Boolean
  }
}
</script>

<style lang="scss" src="./RequestTemplate.scss" scoped></style>