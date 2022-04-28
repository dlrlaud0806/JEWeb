const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'rlaud',
    password: 'wodmsWkd',
    database: 'jeweb'
});

module.exports = db;