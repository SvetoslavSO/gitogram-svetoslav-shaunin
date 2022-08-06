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
        <FollowsProfile 
        :author="authUser.userAvatar"
        :authorName="authUser.username"
        :userRepos="authUser.userNumberOfRepos"
        :company="authUser.company"
        :following="authUser.following"
        :status="authUser.status"
        @changeStatusTrue="changeStatus(true, authUser.status)"
        @changeStatusFalse="changeStatus(false, authUser.status)"
        user="user"
        />
      </div>
    </template>
  </Header>
  <div class="container">
    <main class="repositories__content">
      <div class="profile">
        <div class="profile__content">
          <div class="profile__desc">
            My profile
          </div>
          <FollowsProfile 
            :author="authUser.userAvatar"
            :authorName="authUser.username"
            :userRepos="authUser.userNumberOfRepos"
            :company="authUser.company"
            :following="authUser.following"
            :status="authUser.status"
            @changeStatusTrue="changeStatus(true, authUser.status)"
            @changeStatusFalse="changeStatus(false, authUser.status)"
            user="user"/>
        </div>
      </div>
      <div class="repositories" v-if="authUser.status">
        <div class="repositories__desc">
          Repositories
        </div>
        <LoadingComponent v-if="followLoadingRepos" color="green"/>
        <ul class="repositories__list" v-else v-for="repos in userRepos" :key="repos.id">
          <li class="repositories__item">
            <UserRepos :repo="repos"/>
          </li>
        </ul>
      </div>
      <div class="followings" v-else>
        <div class="followings__content">
          <div class="followings__desc">
            Following
          </div>
          <LoadingComponent v-if="followLoadingFollows" color="green"/>
          <ul class="followings__list" v-else v-for="follow in followings" :key="follow.id">
            <li class="followings__item">
              <FollowingByUsers :follow="follow" @onUnfollow="followHandler(follow)"/>
            </li>
          </ul>
        </div>
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
import { LoadingComponent } from '../../components/LoadingComponent'
import { UserRepos } from '../../components/UserRepos'
import { FollowingByUsers } from '../../components/FollowingByUsers'
export default {
  name: 'profile',
  components: {
    Header,
    navigationMenu,
    icon,
    FollowsProfile,
    LoadingComponent,
    UserRepos,
    FollowingByUsers
  },
  setup () {
    const { dispatch, state } = useStore();
    const changeStatus = (isCorrect, userStatus) => {
      if (isCorrect === !userStatus) {
        dispatch('authUser/changeStatus', userStatus)
      }
    }
    const followHandler = (follow) => {
      follow.followed ? onUnfollow(follow.login) : onFollow(follow.login)
    }
    const onUnfollow = (follow) => {
      dispatch('followings/unfollow', follow)
    }
    const onFollow = (follow) => {
      dispatch('followings/follow', follow)
    }
    onBeforeMount(() => {
      dispatch('authUser/getUser');
      dispatch('starredRepo/fetchAllStarredRepo');
      dispatch('userRepos/getRepos');
      dispatch('followings/getFollowings');
    })
    return {
      users: computed(() => state.users.data),
      authUser: computed(() => state.authUser.data),
      starredRepos: computed(() => state.starredRepo.data),
      userRepos: computed(() => state.userRepos.data),
      followings: computed(() => state.followings.data),
      followLoadingRepos: computed(() => state.userRepos.loading),
      followLoadingFollows: computed(() => state.followings.loading),
      followHandler,
      onUnfollow,
      onFollow,
      changeStatus
    }
  }
}
</script>

<style lang="scss" scoped src="./profile.scss"></style>