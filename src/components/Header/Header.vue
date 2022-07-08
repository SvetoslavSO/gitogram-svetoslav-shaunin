<template>
  <div class="c-header">
    <div class="x-container">
      <div class="navigation">
        <slot name="navigation" />
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./Header.scss" scoped></style>