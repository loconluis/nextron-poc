const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  webpack: config => Object.assign(config, {
    target: 'electron-renderer'
  }),
  exportPathMap: async function () {
    return {
      '/home': { page: '/home' },
      '/next': { page: '/next' },
    };
  }
});