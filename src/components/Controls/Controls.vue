<template>
  <div class="card">
    <div class="left-arrow">
      <icon name='leftArrow'/>
    </div>
    <div class="card-content">
      <StoryCard />
    </div>
    <div class="right-arrow">
      <icon name='rightArrow'/>
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { StoryCard } from '../../components/StoryCard'

export default {
  name: 'Controls',
  components: {
    StoryCard,
    icon
  }
}
</script>

<style lang="scss" src="./Controls.scss" scoped></style>