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
        <div class="comments">
          <comments
            :repo="list" :issues="list.issues" :loading="list.loading" @onToggle="onToggle(list.id)"
          />
        </div>
        <div class="date">
        </div>
      </li>
  </ul>
</template>
<script>
  import { Profile } from '../../components/Profile'
  import { LibraryBtn } from '../../components/LibraryBtn'
  import { comments } from '../../components/comments'
  import { mapActions } from 'vuex';
  export default {
    name: 'Expansion',
    components: {
      Profile,
      LibraryBtn,
      comments
    },
    emits: ['onToggle'],
    methods: {
        ...mapActions({
        fetchReadme: 'users/fetchReadme',
        getIssues: 'starredRepo/getIssues'
      }),
      async onToggle (id) {
        await this.getIssues(id);
      }
    },
    props:{
      lists :{
        required: true
      }
    }
  }
</script>
<style lang="scss" scoped src="./Expansion.scss"></style>