<template>
    <div class="hat">
        <hat>
            <template #navigation>
                <div class="header">
                    <div class="logo">
                        <icon name="logo"/>
                    </div>
                    <ul class="navigation-menu">
                        <li class="navigation-menu__item">
                            <div class="icon">
                                <icon name="home"/>
                            </div>
                        </li>
                        <li class="navigation-menu__item">
                            <div class="image">
                                <img class="profile__photo" src="../../assets/profile-photo.svg" />
                            </div>
                        </li>
                        <li class="navigation-menu__item">
                            <div class="icon">
                                <icon name="logout"/>
                            </div>
                        </li>
                    </ul>
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
        </hat> 
    </div>
    <main class="maincontent">
        <library v-for="list in lists" :key="list.id" :remarks="remarks">
            <template #application>
                <application
                    :author='joshua_l'
                    authorName='joshua_l'
                    :appName='list.title'
                    textDescription='JavaScript'
                    text='framework for building interactive web applications ⚡'
                />
            </template>
        </library>
    </main>
</template>

<script>
    import { hat } from '../../components/hat'
    import { icon } from '../../icons'
    import { storyUserItem } from '../../components/storyUserItem'
    import stories from './data.json'
    import remarks from './remarks.json'
    import { library } from '../../components/library'
    import { application } from '../../components/application'

        export default {
        name: 'welcome',
        components:{ 
            hat,
            icon,
            storyUserItem,
            library,
            application
        },
        data () {
            return {
                stories,
                remarks,
                shown: false,
                lists : [ 
                    {
                        id : '1',
                        title: 'vue.js'                            
                    },
                    {
                        id : '2',
                        title: 'javascript'                            
                    },
                    {
                        id : '3',
                        title: 'html'                            
                    },
                    {
                        id : '4',
                        title: 'css'                            
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped src="./welcome.scss"></style>