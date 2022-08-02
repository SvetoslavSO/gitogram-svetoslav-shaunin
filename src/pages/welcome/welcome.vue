<template>
  <div class="hat">
    <Header>
      <template #navigation>
        <div class="header">
          <div class="logo">
            <icon name="logo"/>
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
    <library :lists="starredRepos"/>
  </main>
</template>

<script>
import { Header } from '../../components/Header'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import remarks from './remarks.json'
import lists from './lists.json'
import { library } from '../../components/library'
import { navigationMenu } from '../../components/navigation-menu'
import { mapState, mapActions } from 'vuex';
export default {
  name: 'welcome',
  components: {
    Header,
    icon,
    storyUserItem,
    library,
    navigationMenu
  },
  computed: {
    ...mapState({
      users: (state) => state.users.data,
      starredRepos: (state) => state.starredRepo.data,
      authUser: (state) => state.authUser.data
    })
  },
  methods: {
    ...mapActions({
      fetchReadme: 'users/fetchReadme',
      fetchStarredRepos: 'starredRepo/fetchStarredRepo',
      getUser: 'authUser/getUser',
      logout: 'authUser/logout'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    onLogout () {
      this.logout()
    }
  },
  data () {
    return {
      stories,
      remarks,
      shown: false,
      lists
    }
  },
  async beforeMount () {
    await this.getUser();
    await this.fetchStarredRepos()
  }
}
</script>

<style lang="scss" scoped src="./welcome.scss"></style>