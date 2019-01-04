const gulp = require('gulp');
const del = require('del');
const index = require('./samplesMaker/index');

const _ = require('lodash');


/**
 * Gera samples
 *
 * @task {build:samples}
 */
gulp.task('build-samples', done => {
  console.log('build-samples');  
  index.initialize();
  done();
});

/**
 * Limpa arquivos de samples
 * @task {clean-samples}
 */
gulp.task('clean-samples', () => {
  console.log('clean-samples');
  return del(['./samples/*'])
});

gulp.task('build', gulp.series('clean-samples', 'build-samples', done => {
  done();
}));
