const { defineConfig } = require('@vue/cli-service')
const historyApiFallback = require('./historyApiFallback'); /**up */

module.exports = defineConfig({
  publicPath: "/scanditest/",
  transpileDependencies: true,
  
  devServer: { /**up */
    before: historyApiFallback
  }
})
