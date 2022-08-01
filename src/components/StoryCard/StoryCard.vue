<template>
  <div class="story">
    <header class="story__header">
      <StoryHeader v-bind:active="active" :author="obj.owner?.avatar_url" :authorName="obj.owner?.login" @onFinish="$emit('onFinish')"/>
    </header>
    <div class="story__main-content">
      <LoadingComponent class="loading-component" v-if="obj.readme_loading"/>
      <Placeholder v-else-if="!obj.readme" :paragraphs="4"/>
      <div v-else v-html="obj.readme"></div>
    </div>
    <footer class="story__footer">
      <StoryBtn :loading="obj.follow_loading" :following="obj.status" @onFollow="$emit('onFollow')"/>
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
