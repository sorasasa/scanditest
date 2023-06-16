const { defineConfig } = require('@vue/cli-service')
const historyApiFallback = require('./historyApiFallback'); 

module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  
  devServer: { /**important*/
    headers: { "Access-Control-Allow-Origin": "*" },
   
    before: historyApiFallback
  }
})
