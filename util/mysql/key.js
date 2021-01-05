var key = {
    'host': 'localhost',
    'user': 'root',
    'password': 'root',
    'database': 'web193'
}

module.exports = key;
//这个模块是用于数据库连接的钥匙，数据库连接时需要用到这个key中的属性 将这个模块暴露出去，由连接数据库时引用