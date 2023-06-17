const { defineConfig } = require('@vue/cli-service')
const historyApiFallback = require('./historyApiFallback'); 

module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  
  configureWebpack:{
  devServer: { /**important*/
    before: historyApiFallback,
    headers: {  "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  }
    
    }
  }
})
