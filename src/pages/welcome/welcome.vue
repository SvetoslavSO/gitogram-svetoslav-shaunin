<template>
    <div class="hat">
        <Header>
            <template #navigation>
                <div class="header">
                    <div class="logo">
                        <icon name="logo"/>
                    </div>
                    <navigation-menu
                        photo = "joshua.png"
                    />
                </div>
            </template>
            <template #content>
                <ul class="stories-list">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        <story-user-item
                            :avatar="story.avatar"
                            :username="story.username"
                            @onPress="handlePress(story.id)"
                        />
                    </li>
                </ul>
            </template>
        </Header> 
    </div>
    <main class="maincontent">
        <library :remarks="remarks" :lists="lists" />
    </main>
    <ServerRequest />
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
    import { ServerRequest } from '../../components/ServerRequest'

        export default {
        name: 'welcome',
        components:{ 
            Header,
            icon,
            storyUserItem,
            library,
            navigationMenu,
            ServerRequest
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