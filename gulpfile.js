/**
 * 
 * @authors lxlhome (248256144@qq.com)
 * @date    2018-02-27 09:02:27
 * @version $Id$
 */
//gulp
var gulp = require('gulp');
//清空或者删除文件
var del = require('del');
//重命名
var rename = require('gulp-rename');
//编译less
var less = require('gulp-less');
//压缩CSS
var cleanCss = require('gulp-clean-css');
//合并 JS  CSS
var concat = require('gulp-concat');
//压缩JS
var uglify = require('gulp-uglify');
//压缩图片
var imagesmin = require('gulp-imagesmin');
//CSS雪碧图
var spriter = require('gulp-css-spriter');
//图片base64
var base64 = require('gulp-base64');
//浏览器实时监控
var browsersync = require('browser-sync').create();
var reload = browsersync.reload;
//更新实时提示
var notify = require('gulp-notify');
//队列任务控制
var runSequence = require('run-sequence');
//版本控制
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

// 公共配置

// dev  开发环境 path 配置
var dev = {
	basePath: './dev/',
	js: './dev/js/',
	css: './dev/css',
	images: './dev/images/'
};
// production 生产环境 path 配置
var pro = {
	basePath: './src/',
	less: './src/less/',
	css: './src/css/',
	js : './src/js',
	images: './src/images'
};

/* ===== 开发环境 ===== */

/* ===== 生产环境 ===== */