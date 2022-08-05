<template>
  <Header>
    <template #navigation>
      <div class="header">
          <div class="logo">
            <icon name="logo" @click="$router.push('/')"/>
          </div>
          <navigation-menu
            :photo="authUser.userAvatar"
            @onLogout="onLogout()"
          />
      </div>
    </template>
    <template #content>
      <div class="telephone__profile">
        <FollowsProfile :author="authUser.userAvatar"  :authorName="authUser.username" :userRepos="authUser.userNumberOfRepos" :company="authUser.company" user="user"/>
      </div>
    </template>
  </Header>
  <div class="container">
    <main class="following__content">
      <div class="profile">
        <div class="profile__content">
          <div class="profile__desc">
            My profile
          </div>
          <FollowsProfile :author="authUser.userAvatar"  :authorName="authUser.username" :userRepos="authUser.userNumberOfRepos" :company="authUser.company" user="user"/>
        </div>
      </div>
      <div class="followings">
        <div class="followings__desc">
          Following
        </div>
        <LoadingComponent v-if="followLoading" color="green"/>
        <ul class="followings__list" v-else v-for="follow in followings" :key="follow.id">
          <li class="followings__item">
            <FollowingByUsers :follow="follow" @onUnfollow="followHandler(follow)"/>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onBeforeMount, computed } from 'vue'
import { Header } from '../../components/Header'
import { icon } from '../../icons'
import { navigationMenu } from '../../components/navigation-menu'
import { FollowsProfile } from '../../components/FollowsProfile'
import { FollowingByUsers } from '../../components/FollowingByUsers'
import { LoadingComponent } from '../../components/LoadingComponent'
export default {
  name: 'follows',
  components: {
    Header,
    navigationMenu,
    icon,
    FollowsProfile,
    FollowingByUsers,
    LoadingComponent
  },
  setup () {
    const { dispatch, state } = useStore();
    const followHandler = (follow) => {
      console.log(follow.login)
      follow.followed ? onUnfollow(follow.login) : onFollow(follow.login)
    }
    const onUnfollow = (follow) => {
      console.log(follow)
      dispatch('followings/unfollow', follow)
    }
    const onFollow = (follow) => {
      console.log(follow)
      dispatch('followings/follow', follow)
    }
    onBeforeMount(() => {
      dispatch('authUser/getUser');
      dispatch('starredRepo/fetchAllStarredRepo');
      dispatch('followings/getFollowings');
    })
    return {
      users: computed(() => state.users.data),
      starredRepos: computed(() => state.starredRepo.data),
      authUser: computed(() => state.authUser.data),
      followings: computed(() => state.followings.data),
      followLoading: computed(() => state.followings.loading),
      followHandler,
      onUnfollow,
      onFollow
    }
  }
}
</script>

<style lang="scss" scoped src="./follows.scss"></style>