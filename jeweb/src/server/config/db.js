const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'rlaud',
    password: 'wodmsWkd',
    database: 'jeblog'
});

module.exports = db;