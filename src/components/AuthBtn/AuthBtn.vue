<template>
  <button type="submit" class="auth-btn">
      <div class="button__text">Authorize with github</div>
      <div class="octocat__icon">
        <icon name='octocat'/>
      </div>
    </button>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'AuthBtn',
  components: {
    icon
  }
}
</script>

<style lang="scss" scoped src="./AuthBtn.scss"></style>