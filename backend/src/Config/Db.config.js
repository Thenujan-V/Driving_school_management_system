var mysql = require('mysql')

var con = mysql.createConnection({
    host:'localhost',
    username: 'root',
    password: 'Thenu2000@',
    dbName: 'driving_school'
})

con.connect(function(err){
    if(err) throw err;
    console.log('conected')
})