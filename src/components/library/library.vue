<template>
  <div class="c-library">
    <div class="x-container">
      <div class="lib-container">
        <div class="application">
          <slot name="application" />
        </div>
        <div class="comment">
          <comments
                :remarks="remarks"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { comments } from '@/components/comments'

  export default {
    components : {
      comments
    },
    props:{
      remarks: { 
          type: Array,
          required: true
        }
    }
  }
</script>

<style lang="scss" src="./library.scss" scoped></style>