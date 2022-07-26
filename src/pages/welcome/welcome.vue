<template>
    <div class="hat">
        <Header>
            <template #navigation>
                <div class="header">
                    <div class="logo">
                        <icon name="logo"/>
                    </div>
                    <navigation-menu
                        photo = "https://picsum.photos/200/300"
                    />
                </div>
            </template>
            <template #content>
                <ul class="stories-list">
                    <li class="stories-item" v-for="(user,index) in users" :key="user.id" ref="item">
                        <story-user-item
                            :obj="getStoryData(user)"
                            @onPress="$router.push({name: 'stories', params: {initialSlide: index}})"
                        />
                    </li>
                </ul>
            </template>
        </Header> 
    </div>
    <main class="maincontent">
        <library :remarks="remarks" :lists="lists" />
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
    import { mapState } from 'vuex';

    export default {
        name: 'welcome',
        components:{ 
            Header,
            icon,
            storyUserItem,
            library,
            navigationMenu
        },
        computed: {
            ...mapState({
              users: (state) => state.users.data
            })
        },
        methods: {
          getStoryData (obj) {
            return {
              id: obj.id,
              userAvatar: obj.owner?.avatar_url,
              username: obj.owner?.login,
              content: obj.readme
            }
          }
        },
        data () {
            return {
                stories,
                remarks,
                shown: false,
                lists
            }
        }
    }
</script>

<style lang="scss" scoped src="./welcome.scss"></style>