module.exports = {
  devServer: {
    proxy: {
      // 当地址中有/api 的时候会触发代理机制
      '/api': {
        target: 'http://1.116.64.64:5004', // 要代理的服务器地址 这里不用写 api
        changeOrigin: true  // 是否跨域
        // 重写路径
        // pathRewrite: {}
      }
    }
  }
}