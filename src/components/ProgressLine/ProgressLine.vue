<template>
  <div :class="['progress',  {active}]">
    <div ref='progressCurrent' class="progress__current"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressLine',
  data () {
    return {
      active: false
    }
  },
  emits:['onFinish'],
  methods:{
    emitOnFinish() {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this.active = true
    })
    this.$refs.progressCurrent.addEventListener('transitionend', this.emitOnFinish);
  },
  beforeUnmount () {
    this.$refs.progressCurrent.removeEventListener('transitionend', this.emitOnFinish);
  }
}
</script>

<style lang="scss" scoped src="./ProgressLine.scss"></style>