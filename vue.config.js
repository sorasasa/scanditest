const { defineConfig } = require('@vue/cli-service')
const historyApiFallback = require('./historyApiFallback'); 

module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  
  devServer: { /**important*/
    proxy: 'http://localhost:3000/products',
    before: historyApiFallback
  }
})
