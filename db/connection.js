const mysql = require('mysql2');
require('dotenv').config();

//Connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: 'company'
    }
);

module.exports = db;
