var express = require('express')
var bodyParser = require('body-parser') //专门翻译post请求       
var app = express()
var path = require('path')

app.listen(3000, () => {
    console.log('web服务器启动成功')
})


//设置http请求的大小 ，防止图片或者文件过大加载不出
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));
var userRouter = require('./routers/user')
app.use('/', userRouter)

//托管静态资源
app.use('/view', express.static(path.join(__dirname, '/view')))
app.use('/img', express.static(path.join(__dirname, '/img')))
app.use('/css', express.static(path.join(__dirname, '/css')))
app.use('/js', express.static(path.join(__dirname, '/js')))
app.use('/bootstrap-3.3.7-dist', express.static(path.join(__dirname, '/bootstrap-3.3.7-dist')))
app.use('/layui', express.static(path.join(__dirname, '/layui')))
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')))

//设置各版本跨域 防止不兼容
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,xtoken");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
process.on('uncaughtException', function(err) {
    //打印出错误
    console.log(err);
    //打印出错误的调用栈方便调试
    console.log(err.stack);
});