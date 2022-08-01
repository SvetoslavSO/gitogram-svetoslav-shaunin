const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/gitogram-svetoslav-shaunin/' : '/',
  css:{
    loaderOptions:{
      scss:{
        additionalData: '@import "~@/variables.scss";'
      }
    }
  }
})