module.exports = {
  clientsClaim: true,
  navigateFallback: 'index.html',
  skipWaiting: true,
  staticFileGlobs: [
    'src/**/*.html',
    'locales/*.json'
  ],
  stripPrefix: true,
  runtimeCaching: [{
    urlPattern: /api\.my-site\.com/,
    handler: 'networkFirst'
  }]
};
