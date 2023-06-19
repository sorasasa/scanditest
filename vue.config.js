const { defineConfig } = require('@vue/cli-service')
const historyApiFallback = require('./historyApiFallback'); 

module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  
  devServer: { /**important*/
    before: historyApiFallback,
    proxy:{
      '/api':{
        target:'http://localhost:3000/products',
        ws: true,
        changeOrigin: true
      }
    }
    },
  
})
