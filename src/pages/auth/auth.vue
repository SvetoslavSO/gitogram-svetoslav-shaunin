<template>
  <div class="wrapper">
    <div class="left__column">
      <div class="auth__logo">
        <icon name='logo'/>
      </div>
      <div class="auth__desc">
        More than just one repository.
        This is our digital world.
      </div>
      <AuthBtn @click="getCode()"/>
    </div>
    <div class="right__column">
      <img src="../../assets/authImage.png" alt="">
      </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { AuthBtn } from '../../components/AuthBtn'
import env from '../../../env'
export default {
  name: 'auth',
  components: {
    icon,
    AuthBtn
  },
  methods:{
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize';
      const params = new URLSearchParams();
      params.append('client_id', env.clientId);
      params.append('scope', 'repo, user');
      window.location.href = `${githubAuthApi}?${params}`;
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId: env.clientId,
            code,
            clientSecret: env.clientSecret
          })
        })
        const { token } = await response.json();
        localStorage.setItem('token', token);
        this.$router.replace({ name: 'main' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./auth.scss"></style>