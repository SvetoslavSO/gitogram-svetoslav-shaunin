<template>
  <div class="hat">
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
        <ul class="stories-list">
          <li class="stories-item" v-for="(user,index) in users" :key="user.id" ref="item">
            <story-user-item
              :obj="user"
              @onPress="$router.push({name: 'stories', params: {initialSlide: index}})"
            />
          </li>
        </ul>
      </template>
    </Header>
  </div>
  <main class="maincontent">
    <library :lists="starredRepos" />
  </main>
</template>

<script>
import { Header } from '../../components/Header'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { library } from '../../components/library'
import { navigationMenu } from '../../components/navigation-menu'
import { useStore } from 'vuex';
import { onBeforeMount, computed } from 'vue'

export default {
  name: 'welcome',
  components: {
    Header,
    icon,
    storyUserItem,
    library,
    navigationMenu
  },
  setup () {
    const { dispatch, state } = useStore();
    const onLogout = () => {
      dispatch('authUser/logout')
    }
    onBeforeMount(() => {
      dispatch('authUser/getUser');
      dispatch('starredRepo/fetchStarredRepo', { limit: 10 });
    })
    return {
      users: computed(() => state.users.data),
      starredRepos: computed(() => state.starredRepo.data),
      authUser: computed(() => state.authUser.data),
      onLogout
    }
  },
  data () {
    return {
      shown: false
    }
  }
}
</script>

<style lang="scss" scoped src="./welcome.scss"></style>