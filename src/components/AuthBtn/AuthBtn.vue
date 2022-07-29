<template>
  <button type="submit">
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