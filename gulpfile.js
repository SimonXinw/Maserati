var gulp =require('gulp');
var uglify = require('gulp-uglify');//JS压缩
var minifyCss = require('gulp-minify-css');//CSS压缩
var minifyHtml = require('gulp-minify-html');//html压缩
var sass = require('gulp-sass');//sass文件自动编译css
var gulpconnect = require('gulp-connect');//浏览器自动刷新

gulp.task('sass',function (){
    return gulp.src(['./czn/sass/*.scss','./skw/sass/*.scss','./ouyang/sass/*.scss','./zy/sass/*.scss','./xw/sass/*.scss'])
    .pipe(sass())
    // .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulpconnect.reload())
})

gulp.task('img',function (){
    return gulp.src(['./czn/imgs/*.jpg','./czn/imgs/*.png','./skw/imgs/*.jpg','./skw/imgs/*.png','./ouyang/imgs/*.jpg','./ouyang/imgs/*.png','./zy/imgs/*.jpg','./zy/imgs/*.png','./xw/imgs/*.jpg','./xw/imgs/*.png','./skw/imgs/*.jpeg'])
    .pipe(gulp.dest('./dist/imgs'))
    .pipe(gulpconnect.reload())
})

gulp.task('js',function (){
    return gulp.src(['./czn/js/*.js','./skw/js/*.js','./ouyang/js/*.js','./zy/js/*.js','./xw/js/*.js'])
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(gulpconnect.reload())
})

gulp.task('html',function (){
    return gulp.src(['./zy/*.html','./skw/*.html','./ouyang/*.html','./czn/html/*.html','./xw/*.html'])
    // .pipe(minifyHtml())
    .pipe(gulp.dest('./dist/html'))
    .pipe(gulpconnect.reload())
})

gulp.task('htmll',function (){
    return gulp.src('./index.html')
    // .pipe(minifyHtml())
    .pipe(gulp.dest('./dist'))
    .pipe(gulpconnect.reload())
})

gulp.task('gulpconnect',function (done){
    gulpconnect.server({
        livereload: true,//自动更新
    });
    done();
})

gulp.task('watchs',function (){
    gulp.watch(['./czn/html/*.html','./skw/*.html','./ouyang/*.html','./zy/*.html','./xw/*.html'],gulp.series('html','htmll'));
    gulp.watch(['./czn/sass/*.scss','./skw/sass/*.scss','./ouyang/sass/*.scss','./zy/sass/*.scss','./xw/sass/*.scss'],gulp.series('sass'));
    gulp.watch(['./czn/js/*.js','./skw/js/*.js','./ouyang/js/*.js','./zy/js/*.js','./xw/js/*.js'],gulp.series('js'))
    gulp.watch(['./czn/imgs/*.jpg','./czn/imgs/*.png','./skw/imgs/*.jpg','./skw/imgs/*.png','./ouyang/imgs/*.jpg','./ouyang/imgs/*.png','./zy/imgs/*.jpg','./zy/imgs/*.png','./xw/imgs/*.jpg','./xw/imgs/*.png'],gulp.series('img'))
})




gulp.task('run',gulp.series('gulpconnect','watchs'));

gulp.task('bliud', gulp.parallel(
    gulp.series('html','htmll'),
    gulp.series('sass'),
    gulp.series('js'),
    gulp.series('img')
    )
);