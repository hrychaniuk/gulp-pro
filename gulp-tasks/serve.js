'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import yargs from 'yargs';
import browsersync from 'browser-sync';

const argv = yargs.argv,
  isPug = !!argv.pug;

gulp.task('serve', () => {
  browsersync.init({
    server: {
      baseDir: ['./dist/'],
      routes: {
        '/404': 'dist/404.html',
        '/about': 'dist/about.html',
      },
    },
    port: 80,
    notify: true,
  });

  Object.keys(paths).forEach(task => {
    if (isPug && task === 'njk') return;
    if (!isPug && task === 'pug') return;
    gulp.watch(paths[task].watch, gulp.parallel(task));
  });
});
