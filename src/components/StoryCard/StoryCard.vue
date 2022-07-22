<template>
  <div class="story">
    <header class="story__header">
      <StoryHeader v-bind:active="active" :author="author" :authorName="authorName"/>
    </header>
    <div class="story__main-content">
      <ServerRequest v-if="active"/>
      <Placeholder v-if="!active" :paragraphs="4"/>
    </div>
    <footer class="story__footer">
      <StoryBtn />
    </footer>
  </div>
</template>

<script>
import { StoryBtn } from '../../components/StoryBtn'
import { StoryHeader } from '../../components/StoryHeader'
import { ServerRequest } from '../../components/ServerRequest'
import { Placeholder } from '../../components/Placeholder'

export default {
  name: 'StoryCard',
  components:{
    StoryHeader,
    StoryBtn,
    ServerRequest,
    Placeholder
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

<style lang="scss" src="./StoryCard.scss" scoped></style>