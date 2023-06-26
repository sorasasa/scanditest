const { defineConfig } = require('@vue/cli-service')
const historyApiFallback = require('./historyApiFallback'); 

module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  
  devServer: { /**important*/
  onBeforeSetupMiddleware: historyApiFallback,
    /*proxy:{
      '/products':{
        target:'https://products-api-topaz.vercel.app/products',
        //ws: true,
        changeOrigin: true
      }
    }*/
    },
})
