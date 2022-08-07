<template>
  <div class="following__content">
    <FollowsProfile :author="follow.owner.avatar_url" :authorName="follow.owner.login" :company="follow.type"/>
    <div class="following__btn">
      <FollowingBtn :following="follow.following" @onUnfollow="$emit('onUnfollow')"/>
    </div>
  </div>
</template>

<script>
import { FollowingBtn } from '../../components/FollowingBtn'
import { FollowsProfile } from '../../components/FollowsProfile'
export default {
  name: 'FollowingByUsers',
  components: {
    FollowingBtn,
    FollowsProfile
  },
  emits: ['onUnfollow'],
  props: {
    follow: Object,
    following: Boolean
  }
}
</script>

<style lang="scss" scoped src="./FollowingByUsers.scss"></style>