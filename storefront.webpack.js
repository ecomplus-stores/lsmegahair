const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './js/TheAccount.js': path.resolve(__dirname, 'template/js/custom-js/js/TheAccount.js'),
      './html/TheAccount.html': path.resolve(__dirname, 'template/js/custom-js/html/TheAccount.html')

    }
  }
})