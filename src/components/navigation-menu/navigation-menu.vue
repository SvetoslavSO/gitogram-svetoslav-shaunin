<template>
  <ul class="navigation-menu">
      <li class="navigation-menu__item">
          <div class="icon">
              <icon name="home"/>
          </div>
      </li>
      <li class="navigation-menu__item">
          <div class="image">
              <img class="profile__photo" :src="require(`../../assets/${photo}`)" />
          </div>
      </li>
      <li class="navigation-menu__item">
          <div class="icon">
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
    props:{
      photo:{
        type : String,
        require: true
      }
    }
  }
</script>

<style lang="scss" scoped src="./navigation-menu.scss"></style>