<template>
  <div class="wrapper">
    <div class="slider-page">
      <header class="stories-header">
        <div class="x-container">
          <button class="logo">
            <div class="logo-icon">
              <icon name="logo"/>
            </div>
          </button>
          <button class="close-btn">
            <div class="close-icon">
              <icon name="close"/>
            </div>
          </button>
        </div>
      </header>
      <div class="content">
        <Slide :initialSlide="Number($route.params.initialSlide)" />
      </div>
    </div>
  </div>
</template>

<script>
  import { Slide } from '../../components/Slide'
  import { icon } from '../../icons'

  export default {
  name: 'Stories',
    components:{ 
      Slide,
      icon
    }
  }
</script>

<style lang="scss" src="./Stories.scss" scoped></style>