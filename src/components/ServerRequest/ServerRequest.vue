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
    </ul>
  </div>
</template>

<script>
import * as api from '../../api'
import { RequestTemplate } from '../../components/RequestTemplate'

export default {
  name: 'ServerRequest',
  components: { RequestTemplate },
  data () {
    return {
      items: []
    }
  },
  methods: {},
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items;
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" src="./ServerRequest.scss" scoped></style>