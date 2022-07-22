<template>
  <div class="story-header">
    <ProgressLine v-bind:active="active" />
    <div class="story-profile">
      <Profile :author="author" :authorName="authorName"/>
    </div>
  </div>
</template>

<script>
import Profile from "../../components/Profile/Profile.vue"
import ProgressLine from "../../components/ProgressLine/ProgressLine.vue"

export default {
  name:  "StoryHeader",
  components:{
    Profile,
    ProgressLine
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

<style lang="scss" src="./StoryHeader.scss" scoped></style>