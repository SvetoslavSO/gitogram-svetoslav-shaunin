<template>
  <div class="story-header">
    <ProgressLine />
    <div class="story-profile">
      <Profile author="joshua.png" authorName="joshua_l" />
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
  }
}
</script>

<style lang="scss" src="./StoryHeader.scss" scoped></style>