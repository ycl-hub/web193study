var mysql = require('mysql')
var key = require('../mysql/key')
    //创建增删改查四个方法   现阶段只创建查询方法
var queryFn = (sql, callback) => {
    // console.log('2:' + sql)
    //创建连接
    var connection = mysql.createConnection(key)
        //连接数据库
    connection.connect()
        //使用query方法根据sql对数据库进行操作，在函数中处理数据，函数两个参数 一个错误，一个是数据错误
    connection.query(sql, (err, data) => {
        if (err) {
            return err
        }
        connection.end()
        console.log('2:' + data)
            //运用回调函数解决异步问题
        callback(data)

    })
}

module.exports = queryFn