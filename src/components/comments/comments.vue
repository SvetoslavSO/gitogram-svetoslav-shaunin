<template>
  <toggler @onToggle="toggle" />
  <div v-if="shown && repo.loading">Loading...</div>
  <div v-else-if="shown && repo.issues && !repo.issues.length">No data</div>
  <ul class="c-feed" v-else-if="shown">
      <li class="comments-item" v-for="issue in (repo.issues ?? [])" :key="issue.id">
        <comment :issue="issue"/>
      </li>
  </ul>
</template>

<script>
  import { comment } from '../../components/comment'
  import { toggler } from '../../components/toggler'
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Comments',
    components: {
      toggler,
      comment
    },
    props:{
      remarks: {
          type: Number,
          required: true
        }
    },
    data () {
      return {
        shown: false
      }
    },
    computed: {
      ...mapGetters({
        get_issues: 'starredRepo/getRepoById'
      }),
      repo () {
        return this.get_issues(this.remarks)
      }
    },
    methods: {
      ...mapActions({
        getIssues: 'starredRepo/getIssues'
      }),
      async toggle (isOpened) {
        this.shown = isOpened;
        await this.getIssues(this.remarks);
      }
    }
  }
</script>

<style lang="scss" scoped src="./comments.scss"></style>
