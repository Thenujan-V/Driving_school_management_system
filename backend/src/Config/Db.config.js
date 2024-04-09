var mysql = require('mysql2')

var con = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user: 'root',
    password: 'Thenu2000@',
    database: 'driving_school',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

con.getConnection(function(err){
    if(err) throw err;
    console.log('conected')
}) 

module.exports = con