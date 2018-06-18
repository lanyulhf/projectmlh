var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var connect = require("gulp-connect");
var sass = require("gulp-sass");
//var babel = require("gulp-babel");
//sass编译
gulp.task("sassfile",function(){
	gulp.src(["scss/*.scss"])
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\projectmlh\\productlist\\css"));
});
//定义一个复制文件的任务（命令）
gulp.task("copyhtml",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\projectmlh\\productlist"));
});
gulp.task("copyjs",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\projectmlh\\productlist\\js"));
});

//复制图片文件
gulp.task("images",function(){
	gulp.src("img/*.{jpg,png,gif}")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\projectmlh\\productlist\\img"));
});
//复制font文件夹
gulp.task("copyfont",function(){
	gulp.src("*.*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\projectmlh\\productlist"));
});
//复制fontcss文件夹
gulp.task("copycss",function(){
	gulp.src("scss/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\projectmlh\\productlist\\css"));
});
//合并文件
gulp.task("concatjs",function(){
	gulp.src(["js/index.js","js/goodslist.js"])
	.pipe(concat("common.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\projectmlh\\productlist\\js"));
});


//合并和压缩文件
gulp.task("concatanduglifyjs",function(){
	gulp.src(["js/index.js","js/goodslist.js"])
	.pipe(concat("common.js"))
	.pipe(uglify())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\projectmlh\\productlist\\js"));
});

//合并和压缩重命名文件
gulp.task("concatanduglifyandrenamejs",function(){
	gulp.src(["js/index.js","js/goodslist.js"])
	.pipe(concat("common.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\projectmlh\\productlist\\js"))
//	.pipe(uglify())
	.pipe(rename("common.min.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\projectmlh\\productlist\\js"));
});

//
/*gulp.task("babel",function(){
	gulp.src("js/goodsdetail.js")
	.pipe(babel())
	.pipe(gulp.dest("dist\\js"));
});
*/
//启动监听器
gulp.task("watchall",function(){
	gulp.watch("scss/*.scss",["sassfile"]);
	gulp.watch("*.html",["copyhtml"]);
	gulp.watch("img/*.{jpg,png,gif}",["images"]);
	gulp.watch(["js/index.js","js/goodslist.js"],["concatanduglifyandrenamejs"]);
	gulp.watch("js/*.js",["copyjs"]);
	gulp.watch("*.*",["copyfont"]);
	gulp.watch("scss/*.css",["copycss"]);
	
});


//简易的web服务器
gulp.task("server",function(){
	connect.server({
		"root":"dist"
	});
});