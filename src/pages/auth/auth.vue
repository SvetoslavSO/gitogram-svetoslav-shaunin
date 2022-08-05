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
import { mapState, mapActions } from 'vuex';
export default {
  name: 'auth',
  components: {
    icon,
    AuthBtn
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser.data
    })
  },
  methods:{
    ...mapActions({
      getCode: 'authUser/login',
      getToken: 'authUser/setTokenToLS'
    })
  },
  async created () {
    await this.getToken()
    this.$router.replace({ name: 'main' })
  },
  async getCode () {
    await this.getCode()
  }
}
</script>

<style lang="scss" scoped src="./auth.scss"></style>