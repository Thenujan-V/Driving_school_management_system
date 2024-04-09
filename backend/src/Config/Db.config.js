var mysql = require('mysql')

var con = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user: 'root',
    password: 'Thenu2000@',
    database: 'driving_school'
})

con.connect(function(err){
    if(err) throw err;
    console.log('conected')
}) 