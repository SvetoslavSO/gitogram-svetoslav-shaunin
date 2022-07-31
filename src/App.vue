<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  methods: {
    ...mapActions({
      fetchTrendings: 'users/fetchTrendings',
      fetchStarredRepo: 'starredRepo/fetchStarredRepo'
    })
  },
  async created () {
    await this.fetchTrendings();
    await this.fetchStarredRepo()
  }
}
</script>

<style src="./global.scss" lang="scss"></style>
