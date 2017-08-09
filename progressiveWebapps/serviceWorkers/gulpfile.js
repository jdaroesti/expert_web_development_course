const gulp = require('gulp');
const swPrecache = require('sw-precache');

gulp.task('sw', () => {
  const rootDir = 'dist';
  swPrecache.write(`${rootDir}/service-worker.js`, require('./sw-precache-config'));
});
