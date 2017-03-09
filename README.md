# gulp-inliner

Let you use [Remy Sharp's Inliner](https://www.npmjs.com/package/inliner) in your gulp tasks.

## Installation

Install gulp-inliner via [npm](http://npmjs.org):

  $ npm install gulp-inliner -D

## Usage

  var inliner = require('gulp-inliner');

  gulp.task('html', function(){
    return gulp.src('index.html')
      .pipe(inliner())
      .pipe(gulp.dest('build'))
  });
