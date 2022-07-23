<template>
  <ul class="stories-list">
    <li class="stories-item" v-for="user in users" :key="user.id">
      <SliderElem
       :obj="getStoryData(user)"
       :active="true"
      />
    </li>
  </ul>
  <pre>{{users}}</pre>
</template>

<script>
import { SliderElem } from '../../components/SliderElem'
import { mapState, mapActions } from 'vuex';

export default {
  components : { SliderElem },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      users: (state) => state.users.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'users/fetchTrendings'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login
        // content: obj.readme
      }
    }
  },
  async created () {
    await this.fetchTrendings();
  }
}
</script>