process.env.VUE_APP_API_KEY = process.env.API_KEY

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    host: process.env.EXAMPLE_HOST,
    port: process.env.EXAMPLE_PORT
  },
  lintOnSave: false
}
