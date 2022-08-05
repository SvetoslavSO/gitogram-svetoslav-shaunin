<template>
    <div class="lib-container">
      <div class="application">
        <Expansion
          :lists="lists"
        />
      </div>
    </div>
</template>

<script>
  import { Expansion } from '@/components/Expansion'
  export default {
    components : {
      Expansion
    },
    emits: ['onToggle'],
    props:{
      lists :{
        required: true
      }
    }
  }
</script>

<style lang="scss" src="./library.scss" scoped></style>