<template>
  <div class="x-container">
    <ul class="list">
      <li class="item" v-for="item in items" :key="item.id">
        <RequestTemplate
          :title="item.name"
          :description="item.description"
          :username="item.owner.login"
          :stars="item.stargazers_count"
          dark
        />
      </li>
      <pre>{{trendings}}</pre>
    </ul>
    <pre></pre>
  </div>
</template>

<script>
import { RequestTemplate } from '../../components/RequestTemplate';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ServerRequest',
  components: { RequestTemplate },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      user: (state) => state.user.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: "user/fetchTrendings"
    }),
    getStoryData(obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar.url,
        username: obj.owner?.login,
        content: obj.readme
      }
    }
  },
  async created() {
    await this.fetchTrendings();
  }
}
</script>

<style lang="scss" src="./ServerRequest.scss" scoped></style>