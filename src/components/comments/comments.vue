<template>
  <div class="toggler">
    <toggler @onToggle="toggle" @click="handleToggle"/>
  </div>
  <div v-if="shown && loading">Loading...</div>
  <div v-else-if="shown && issues && !issues.length">No data</div>
  <div class="comments-container" v-else-if="shown">
    <ul class="c-feed">
        <li class="comments-item" v-for="issue in (issues ?? [])" :key="issue.id">
          <comment :user="issue.title" :body="issue.body"/>
        </li>
    </ul>
  </div>
</template>
<script>
  import { comment } from '../../components/comment'
  import { toggler } from '../../components/toggler'
  export default {
    name: 'Comments',
    components: {
      toggler,
      comment
    },
    props:{
      repo: {
        type: Object
      },
      loading: {
        type: Boolean
      },
      issues: {
        type: Object
      }
    },
    emits: ['onToggle'],
    data () {
      return {
        shown: false
      }
    },
    methods: {
      async toggle (isOpened) {
        this.shown = isOpened;
      },
      async handleToggle () {
        if (this.shown && this.issues === undefined) {
          this.$emit('onToggle')
        }
      }
    }
  }
</script>
<style lang="scss" scoped src="./comments.scss"></style>