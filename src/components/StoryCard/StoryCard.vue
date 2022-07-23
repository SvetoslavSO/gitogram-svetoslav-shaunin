<template>
  <div class="story">
    <header class="story__header">
      <StoryHeader v-bind:active="active" :author="obj.userAvatar" :authorName="obj.username"/>
    </header>
    <div class="story__main-content">
      <!--<RequestTemplate />-->
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
import { Placeholder } from '../../components/Placeholder'
// import { RequestTemplate } from '../../components/RequestTemplate'

export default {
  name: 'StoryCard',
  components:{
    StoryHeader,
    StoryBtn,
    // RequestTemplate,
    Placeholder
  },
  props: {
    obj:{
      type: Object,
      required: true
    },
    active:{
      type:Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./StoryCard.scss" scoped></style>