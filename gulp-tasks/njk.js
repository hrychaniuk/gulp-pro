import gulp from 'gulp';
import njkRender from 'gulp-nunjucks-render';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';
import prettify from 'gulp-html-prettify';
import browsersync from 'browser-sync';
import yargs from 'yargs';
import { paths } from '../gulpfile.babel';

const argv = yargs.argv,
  production = !!argv.production;

gulp.task('njk', () => {
  return gulp
    .src(paths.njk.src)
    .pipe(
      njkRender({
        path: ['src/njk/'],
      }),
    )
    .pipe(prettify({ indent_size: 4 }))
    .pipe(gulpif(production, replace('.css', '.min.css')))
    .pipe(gulpif(production, replace('.js', '.min.js')))
    .pipe(gulp.dest(paths.njk.dist))
    .pipe(browsersync.stream());
});
