const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  publicPath: athprocess.env.NODE_ENV === "production" ? "/scanditest/" : "/",
  transpileDependencies: true
})
