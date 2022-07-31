<template>
  <ul class="btns__list">
    <li class="btn">
      <button class="c-btn c-btn--active" @click="$emit('on')">
        <span class="icon">
          <icon name="star" />
        </span>
        Star
      </button>
      <div class="btn__desc">{{starsNumber}}</div>
    </li>
    <li class="btn">
      <button class="c-btn" @click="$emit('on')">
        <span class="icon">
          <icon name="fork" />
        </span>
        Fork
      </button>
      <div class="btn__desc btn__desc--active">{{forksNumber}}</div>
    </li>
  </ul>
</template>

<script>

  import { icon } from '../../icons'

  export default {
    name: 'LibraryBtn',
    components: {
      icon
    },
    props: {
      forksNumber: Number,
      starsNumber: Number
    }
  }
</script>

<style lang="scss" scoped src="./LibraryBtn.scss"></style>