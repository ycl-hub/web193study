//创建了一个ajax函数，接收调用时传递的对象参数，形参是ajxaObj
function ajax(ajaxObj) {
    //创建小黄人XMLHttpRequest对象
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //为了区别get和post方法，于是判断调用时传递的type类型
    if (ajaxObj.type == 'GET') {
        //get
        //        GET           url地址         端口号        资源路径      参数？ 参数格式应为id=001&name=妙蛙种子   异步
        xhr.open(ajaxObj.type, ajaxObj.url + ajaxObj.port + ajaxObj.path + '?' + objToStr(ajaxObj.data), true);
        //准备发送数据
        xhr.send();
    } else if (ajaxObj.type == 'POST') {
        //post
        //        POST           url地址       端口号          资源路径     异步
        xhr.open(ajaxObj.type, ajaxObj.url + ajaxObj.port + ajaxObj.path, true);
        //设置请求头
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        //将参数在此处发送格式也应为字符串
        xhr.send(objToStr(ajaxObj.data));
    }
    //监听变化
    xhr.onreadystatechange = function() {
        //状态
        if (xhr.readyState == 4) {
            //状态码
            if (xhr.status == 200) {
                //当数据可以返回前台时，使用回调函数将结果给调用中success函数
                ajaxObj.success(xhr.responseText);
            } else {
                //失败时，触发小黄人的onerror 将错误参数传递给它
                xhr.onerror = function(err) {
                    //如果调用的对象中有error函数
                    if (ajaxObj.error) {
                        //就把这个错误类型给这个回调函数
                        ajaxObj.error(err)
                    }
                }
            }
        }
    }
}
// 'GET', 'http://localhost:3000', '/query'

//这个函数是将对象转为参数格式的字符串
function objToStr(o) {
    var arr = [];
    for (var i in o) {
        arr.push(i + '=' + o[i])
    }
    return arr.join('&');
}