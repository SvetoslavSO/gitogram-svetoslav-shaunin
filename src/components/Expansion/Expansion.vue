<template>
  <ul class="Expansion__list">
      <li class="Expansion__item" v-for="list in lists" :key="list.id">
        <Profile  :author="list.author" :authorName="list.authorName"/>
        <div class="description">
          <div class="appName">
            {{ list.title }}
          </div>
          <div class="appDescription"><b>{{ list.textDescription }}</b> {{ list.text }}</div>
          <LibraryBtn />
        </div>
        <div class="comments">
          <comments
            :remarks="remarks"
          />
        </div>
        <div class="date">
          {{ list.date }}
        </div>
      </li>
  </ul>
</template>

<script>
  import { Profile } from '../../components/Profile'
  import { LibraryBtn } from '../../components/LibraryBtn'
  import { comments } from '../../components/comments'

  export default {
    name: 'Expansion',
    components: {
      Profile,
      LibraryBtn,
      comments
    },
    props:{
      lists :{
        type: Array,
        required: true
      },
      remarks:{
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped src="./Expansion.scss"></style>