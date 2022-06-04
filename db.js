const mysql = require('mysql2')

const pool = mysql.createPool({
     host: 'localhost',
     user: 'root',
     database: 'cws',
     password:'password',
     waitForConnections: true,
     connectionLimit: 10,
     
   })
   module.exports = pool