<template>
  <ul class="Expansion__list">
      <li class="Expansion__item" v-for="list in lists" :key="list.id">
        <Profile  :author="list.owner?.avatar_url" :authorName="list.owner?.login"/>
        <div class="description">
          <div class="appName">
            {{ list.name }}
          </div>
          <div class="appDescription"><b>{{ list.language }}</b> {{ list.description }}</div>
          <LibraryBtn :forksNumber="list.forks_count" :starsNumber="list.stargazers_count"/>
        </div>
        <!--<div class="comments">
          <comments
            :remarks="remarks"
          />
        </div>-->
        <div class="date">
          {{ getIssues(list.id) }}
        </div>
      </li>
  </ul>
</template>

<script>
  import { Profile } from '../../components/Profile'
  import { LibraryBtn } from '../../components/LibraryBtn'
  // import { comments } from '../../components/comments'
  import { mapActions } from 'vuex';

  export default {
    name: 'Expansion',
    components: {
      Profile,
      LibraryBtn
      // comments
    },
    methods: {
        ...mapActions({
        fetchReadme: 'users/fetchReadme',
        getIssues: 'users/getIssues'
      })
    },
    props:{
      lists :{
        required: true
      }
      /* remarks:{
        type: Array,
        required: true
      } */
    }
  }
</script>

<style lang="scss" scoped src="./Expansion.scss"></style>