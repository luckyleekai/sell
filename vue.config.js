module.exports = {
  configureWebpack: {
    devtool: 'inline-source-map',
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/mock'
          }
        }
      }
    }
  }
}
