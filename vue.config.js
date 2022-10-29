const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/bang':{
        target:'https://api.iynn.cn/film/api/v1',
        changeOrigin:true,
        pathRewrite:{
          '^/bang':''
        }
      }
    }
  }
})
