<template>
    <div class="hat">
        <hat>
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
        </hat> 
    </div>
    <main class="maincontent">
        <library date="15 may" v-for="list in lists" :key="list.id" :remarks="remarks">
            <template #application>
                <application
                    :author='list.author'
                    :authorName='list.authorName'
                    :appName='list.title'
                    :textDescription='list.textDescription'
                    :text='list.text'
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
    import { navigationMenu } from '../../components/navigation-menu'

        export default {
        name: 'welcome',
        components:{ 
            hat,
            icon,
            storyUserItem,
            library,
            application,
            navigationMenu
        },
        data () {
            return {
                stories,
                remarks,
                shown: false,
                lists : [ 
                    {
                        id : '1',
                        title: 'Vue.js',
                        text:  'framework for building interactive web applications ⚡',
                        textDescription: 'JavaScript',
                        author:'joshua.png',
                        authorName:'joshua_l'
                    },
                    {
                        id : '2',
                        title: 'React.js',
                        text:  'JavaScript library used for designing user interfaces',
                        textDescription: 'Open source',
                        author:'Camille.png',
                        authorName:'Camille'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped src="./welcome.scss"></style>