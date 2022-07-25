<template>
  <div class="story">
    <header class="story__header">
      <StoryHeader v-bind:active="active" :author="obj.userAvatar" :authorName="obj.username" @onFinish="$emit('onFinish')"/>
    </header>
    <div class="story__main-content">
      <div v-if="active" v-html="obj.content"></div>
      <Placeholder v-else-if="!active" :paragraphs="4"/>
      <LoadingComponent v-else-if="loading"/>
    </div>
    <footer class="story__footer">
      <StoryBtn />
    </footer>
  </div>
</template>

<script>
import { StoryBtn } from '../../components/StoryBtn'
import { StoryHeader } from '../../components/StoryHeader'
import { Placeholder } from '../../components/Placeholder'
import { LoadingComponent } from '../../components/LoadingComponent'

export default {
  name: 'StoryCard',
  components:{
    StoryHeader,
    StoryBtn,
    Placeholder,
    LoadingComponent
  },
  emits: ['onFinish'],
  props: {
    obj: Object,
    active:Boolean,
    loading:Boolean
  }
}
</script>

<style lang="scss" src="./StoryCard.scss" scoped></style>