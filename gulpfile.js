var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// concat for JS
var concat = require('gulp-concat');
// browsersync
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
// autoprefixer
const autoprefixer = require('gulp-autoprefixer');

// for minification
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

// compile sass
gulp.task('sass', function(){
  return gulp.src('wp-content/themes/williamsgroup/assets/sass/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    // .pipe(gulpIf('*.css', cssnano())) // TURN ON FOR PRODUCTION
    .pipe(autoprefixer())
    .pipe(gulp.dest('wp-content/themes/williamsgroup/assets/css'))
    .pipe(reload({stream:true}));
});

// add js
gulp.task('scripts', function() {
  return gulp.src([
      'wp-content/themes/williamsgroup/assets/js/dist/jquery-3.0.0.min.js',
      'wp-content/themes/williamsgroup/assets/js/lib/jquery.viewportchecker.min.js',
      'wp-content/themes/williamsgroup/assets/js/dist/googleAPI.js',
      'wp-content/themes/williamsgroup/assets/js/dist/googleMAP.js',
      'wp-content/themes/williamsgroup/assets/js/dist/global.js',
      'wp-content/themes/williamsgroup/assets/js/lib/williamsgroup.js'
      ])
    .pipe(concat('project.js'))
    // .pipe(gulpIf('*.js', uglify())) // TURN ON FOR PRODUCTION
    .pipe(gulp.dest('wp-content/themes/williamsgroup/assets/js'));
});


gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://purehair-theme.dev/" // REMEMBER TO CHANGE THIS!!!! https for secure sites
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// WATCH
gulp.task('watch', function(){
  gulp.watch('wp-content/themes/williamsgroup/assets/sass/**/*.sass', ['sass']); 
  gulp.watch('wp-content/themes/williamsgroup/assets/sass/**/*.scss', ['sass']); 
  gulp.watch('wp-content/themes/williamsgroup/assets/js/lib/*.js', ['scripts']);
  // Other watchers
})


gulp.task( 'default', [ 'scripts', 'sass', 'browser-sync' ], function () {
    gulp.watch('wp-content/themes/williamsgroup/assets/sass/**/*.scss', function (file) {
        if (file.type === "changed") {
            reload(file.path);
        }
    });
    gulp.watch('wp-content/themes/williamsgroup/assets/js/lib/*.js', function (file) {
        if (file.type === "changed") {
            reload(file.path);
        }
    });
    gulp.watch("*.html", ['bs-reload']);
    gulp.watch("*.php", ['bs-reload']);
});