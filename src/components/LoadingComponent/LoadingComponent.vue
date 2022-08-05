<template>
  <div :class="['loading-window', color]">
    <div class="loading-icon">
      <icon name="loading" />
    </div>
  </div>
</template>

<script>
   import { icon } from '../../icons'

export default {
  name: 'LoadingComponent',
  props: {
    color: String
  },
  components:{
    icon
  }
}
</script>

<style lang="scss" src="./LoadingComponent.scss" scoped></style>