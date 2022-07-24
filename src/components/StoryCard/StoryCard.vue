<template>
  <div class="story">
    <header class="story__header">
      <StoryHeader v-bind:active="active" :author="obj.userAvatar" :authorName="obj.username"/>
    </header>
    <div class="story__main-content">
      <!--<RequestTemplate />-->
      <Placeholder v-if="!active" :paragraphs="4"/>
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
// import { RequestTemplate } from '../../components/RequestTemplate'

export default {
  name: 'StoryCard',
  components:{
    StoryHeader,
    StoryBtn,
    // RequestTemplate,
    Placeholder,
    LoadingComponent
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

<style lang="scss" src="./StoryCard.scss" scoped></style>