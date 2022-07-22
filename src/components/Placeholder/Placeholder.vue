<template>
  <div class="fake-photo">
    <img class="placeholder-svg" src="../../assets/Placeholder.svg" alt="">
  </div>
  <div class="fake-paragraphs" v-for="paragraph in paragraphs" :key="paragraph">
    <img src="../../assets/FakeParagraphs.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Placeholder',
  props: {
    paragraphs:{
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./Placeholder.scss" scoped></style>