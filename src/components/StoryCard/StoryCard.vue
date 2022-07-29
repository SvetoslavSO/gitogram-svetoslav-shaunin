<template>
  <div class="story">
    <header class="story__header">
      <StoryHeader v-bind:active="active" :author="obj.userAvatar" :authorName="obj.username" @onFinish="$emit('onFinish')"/>
    </header>
    <div class="story__main-content">
      <LoadingComponent class="loading-component" v-if="loading"/>
      <Placeholder v-else-if="!obj.content" :paragraphs="4"/>
      <div v-else v-html="obj.content"></div>
    </div>
    <footer class="story__footer">
      <StoryBtn :loading="obj.following.loading" @onFollow="$emit('onFollow', obj.id)"/>
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
  emits: ['onFinish', 'onFollow'],
  props: {
    obj: Object,
    active:Boolean,
    loading:Boolean
  }
}
</script>

<style lang="scss" src="./StoryCard.scss" scoped></style>