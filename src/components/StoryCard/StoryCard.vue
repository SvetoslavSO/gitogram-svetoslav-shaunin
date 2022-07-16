<template>
  <div class="story">
    <header class="story__header">
      <StoryHeader />
    </header>
    <div class="story__main-content">
      <ServerRequest />
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

export default {
  name: 'StoryCard',
  components:{
    StoryHeader,
    StoryBtn,
    ServerRequest
  }
}
</script>

<style lang="scss" src="./StoryCard.scss" scoped></style>