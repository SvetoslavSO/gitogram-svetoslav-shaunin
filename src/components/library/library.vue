<template>
    <div class="lib-container">
      <div class="application">
        <Expansion  
          :lists="lists"
          :remarks="remarks"
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
    props:{
      remarks: { 
        type: Array,
        required: true
      },
      lists :{
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" src="./library.scss" scoped></style>