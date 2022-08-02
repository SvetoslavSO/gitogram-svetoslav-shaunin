<template>
  <ul class="navigation-menu">
      <li class="navigation-menu__item">
          <div class="icon">
              <icon name="home"/>
          </div>
      </li>
      <li class="navigation-menu__item">
          <div class="image">
              <img class="profile__photo" :src="photo" />
          </div>
      </li>
      <li class="navigation-menu__item">
          <div class="icon" @click="logout">
              <icon name="logout"/>
          </div>
      </li>
  </ul>
</template>

<script>
  import { icon } from '../../icons'

  export default {
    components: {
      icon 
    },
    emits: ['onLogout'],
    props:{
      photo:{
        type : String,
        require: true
      }
    },
    methods:{
      logout () {
        this.$emit('onLogout')
      }
    }
  }
</script>

<style lang="scss" scoped src="./navigation-menu.scss"></style>