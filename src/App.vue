<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  methods: {
    ...mapActions({
      fetchTrendings: 'users/fetchTrendings'
    })
  },
  async created () {
    await this.fetchTrendings();
  }
}
</script>

<style src="./global.scss" lang="scss"></style>
