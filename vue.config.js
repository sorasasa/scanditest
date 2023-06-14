const { defineConfig } = require('@vue/cli-service')
const historyApiFallback = require('./historyApiFallback'); /**up */

module.exports = defineConfig({
  publicPath: athprocess.env.NODE_ENV === "production" ? "/scanditest/" : "/",
  transpileDependencies: true,
  devServer: { /**up */
    before: historyApiFallback
  }
})
