<template>
  <div class="c-feed">
      <toggler @onToggle="toggle" />
      <li class="comments-item" v-for="(user, index) in users" :key="index">
        <comment
            :username="user.issues.title"
            :text="user.issues.body"
        />
      </li>
  </div>
</template>

<script>
  import { comment } from '../../components/comment'
  import { toggler } from '../../components/toggler'
  import { mapState, mapActions } from 'vuex';

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
      ...mapState({
        users: (state) => state.users.data
      })
    },
    methods: {
      ...mapActions({
        getIssues: 'users/getIssues'
      }),
      async toggle (isOpened) {
        this.shown = isOpened;
        await this.getIssues(this.remarks);
        console.log(this.users[0])
      }
    }
  }
</script>

<style lang="scss" scoped src="./comments.scss"></style>

console.log(this.users[0].issues)