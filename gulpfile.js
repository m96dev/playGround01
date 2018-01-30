

// gulpプラグインの読み込み
var gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


 
// index.pugをタスクを作成する
gulp.task('pug', function () {
  // index.pugファイルを取得
  gulp.src('pug/*.pug')
    // pugのコンパイルを実行
    .pipe(pug({
      pretty: true
    }))
    // destフォルダー以下に保存
    .pipe(gulp.dest('dest/'));
});


gulp.task('sass', function () {
  gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      pretty: true
    }))
    .pipe(sourcemaps,write())
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
  gulp.watch('pug/*.pug', ['pug']);
  gulp.watch('scss/*.scss', ['sass']);
  // gulp.watch('scss/*.scss', ['pug']);
});



gulp.task('default', ['pug','watch','sass']);