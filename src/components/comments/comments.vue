<template>
  <div class="c-feed">
      <toggler @onToggle="toggle" />
      <ul class="comments-list" v-if="shown">
          <li class="comments-item" v-for="remark in remarks" :key="remark.id">
              <comment
                  :username="remark.username"
                  :text="remark.text"
              />
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
      remarks: { 
          type: Array,
          required: true
        }
    },
    data () {
      return {
        shown: false
      }
    },
    methods: {
        toggle (isOpened) {
            this.shown = isOpened
        }
    }
  }
</script>

<style lang="scss" scoped src="./comments.scss"></style>