<template>
  <div class="card" v-bind:class="{active}">
    <div class="card-content" >
      <template v-if="active">
        <div class="left-arrow">
            <icon name='leftArrow'/>
        </div>
      </template>
      <StoryCard v-bind:active="active" :obj="obj" :loading="loading"/>
      <template v-if="active">
        <div class="right-arrow" >
          <icon name='rightArrow'/>
        </div>
      </template>
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
    obj:{
      type: Object,
      required: true
    },
    active:{
      type:Boolean,
      required: true
    },
    loading:{
      type:Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./SliderElem.scss" scoped></style>