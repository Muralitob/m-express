var mysql = require('mysql'); //调用MySQL模块
//创建一个connection
var connection = mysql.createConnection({
    host: '127.0.0.1', //主机
    user: 'mura',     //数据库用户名
    password: 'ufo120',     //数据库密码
    port: '3306',
    database: 'tijiao', //数据库名称
    charset: 'UTF8_GENERAL_CI' //数据库编码
});

module.exports = connection