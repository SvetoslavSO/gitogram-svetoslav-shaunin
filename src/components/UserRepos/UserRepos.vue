<template>
  <div class="description">
    <div class="appName">
      {{ repo.name }}
    </div>
    <div class="appDescription"><b>{{ repo.language }}</b> {{ repo.description }}</div>
    <LibraryBtn :forksNumber="repo.forks_count" :starsNumber="repo.stargazers_count"/>
  </div>
  <div type="button" class="date" @click="formateData(repo.updated_at)">
    last update {{ formDat }}
  </div>
</template>
<script>
  import { LibraryBtn } from '../../components/LibraryBtn'
  export default {
    name: 'Expansion',
    components: {
      LibraryBtn
    },
    computed: {
      formDat: function () {
        const [year, month, date] = this.repo.updated_at.split('-')
        let [day] = date.split('T')
        const data = new Date(year, month, day)
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
        const monthData = data.getMonth()
        day = data.getMonth()
        return `${day} ${months[monthData]}`
      }
    },
    props:{
      repo :{
        required: true
      }
    }
  }
</script>
<style lang="scss" scoped src="./UserRepos.scss"></style>