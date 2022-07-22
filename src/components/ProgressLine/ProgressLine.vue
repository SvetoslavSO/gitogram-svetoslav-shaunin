<template>
  <div :class="['progress',  {active}]">
    <div ref='progressCurrent' class="progress__current"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressLine',
  props:{
    active:{
      type: Boolean,
      required: true
    }
  },
  emits:['onFinish'],
  methods:{
    emitOnFinish() {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$refs.progressCurrent.addEventListener('transitionend', this.emitOnFinish);
  },
  beforeUnmount () {
    this.$refs.progressCurrent.removeEventListener('transitionend', this.emitOnFinish);
  }
}
</script>

<style lang="scss" scoped src="./ProgressLine.scss"></style>