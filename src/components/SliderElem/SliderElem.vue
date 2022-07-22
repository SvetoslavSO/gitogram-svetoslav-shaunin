<template>
  <div class="card">
    <div class="card-content">
      <StoryCard active :author="author" :authorName="authorName"/>
    </div>
    <div class="arrows">
      <div class="left-arrow">
        <icon name='leftArrow'/>
      </div>
      <div class="right-arrow">
        <icon name='rightArrow'/>
      </div>
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { StoryCard } from '../StoryCard'

export default {
  name: 'Controls',
  components: {
    StoryCard,
    icon
  },
  props: {
    author:{
      type: String,
      required:true
    },
    authorName:{
      type: String,
      required:true
    },
    active:{
      type:Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./SliderElem.scss" scoped></style>