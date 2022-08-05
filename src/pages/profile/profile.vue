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
    <main class="repositories__content">
      <div class="profile">
        <div class="profile__content">
          <div class="profile__desc">
            My profile
          </div>
          <FollowsProfile :author="authUser.userAvatar"  :authorName="authUser.username" :userRepos="authUser.userNumberOfRepos" :company="authUser.company" user="user"/>
        </div>
      </div>
      <div class="repositories">
        <div class="repositories__desc">
          Repositories
        </div>
        <LoadingComponent v-if="followLoading" color="green"/>
        <ul class="repositories__list" v-else v-for="repos in userRepos" :key="repos.id">
          <li class="repositories__item">
            <UserRepos :repo="repos"/>
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
import { LoadingComponent } from '../../components/LoadingComponent'
import { UserRepos } from '../../components/UserRepos'
export default {
  name: 'profile',
  components: {
    Header,
    navigationMenu,
    icon,
    FollowsProfile,
    LoadingComponent,
    UserRepos
  },
  setup () {
    const { dispatch, state } = useStore();
    onBeforeMount(() => {
      dispatch('authUser/getUser');
      dispatch('starredRepo/fetchAllStarredRepo');
      dispatch('userRepos/getRepos');
    })
    return {
      users: computed(() => state.users.data),
      authUser: computed(() => state.authUser.data),
      userRepos: computed(() => state.userRepos.data),
      followLoading: computed(() => state.userRepos.loading)
    }
  }
}
</script>

<style lang="scss" scoped src="./profile.scss"></style>