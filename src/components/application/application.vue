<template>
  <div class="c-application">
    <div class="author">
      <div class="author__photo">
        <img class="img" :src="author" alt="" />
      </div>
      <div class="author__name">{{ authorName }}</div>
    </div>
    
    <div class="description">
      <div class="appName">
        {{ appName }}
      </div>
      <div class="appDescription"><b>{{ textDescription }}</b> {{ text }}</div>  
      <ul class="btns__list">
        <li class="btn">
          <button class="c-btn c-btn--active" @click="$emit('on')">
            <span class="icon">
              <icon name="star" />
            </span>
            Star
          </button>
          <div class="btn__desc">156k</div>
        </li>
        <li class="btn">
          <button class="c-btn" @click="$emit('on')">
            <span class="icon">
              <icon name="fork" />
            </span>
            Fork
          </button>
          <div class="btn__desc btn__desc--active">4</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { icon } from '../../icons'

  export default {
    name: 'application',
    components: {
      icon
    },
    props:{
      author: {
        type : String,
        required : true
      },
      authorName: {
        type : String,
        required : true
      },
      appName:{
        type : String,
        required : true
      },
      text:{
        required : true
      },
      textDescription:{
        type : String
      }
    }
  }
</script>

<style lang="scss" scoped src="./application.scss"></style>