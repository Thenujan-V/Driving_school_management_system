var dbconnection = require('../Config/Db.config');

var timeTable = function(time){
    this.practice_time = time.practice_time
    this.practice_date = time.practice_date
    this.atendance  = time.atendance
    this.sid = time.sid
}
timeTable.insert_time = function(time, result){
    console.log(time)
    var sql = `insert into practice_time (practice_time, practice_date, sid) values (?, ?, ?)`
    dbconnection.execute(sql, [time.practice_time, time.practice_date, time.sid], function(err, res){
        if(err){
    console.log(err)

            result(err, null)
        }
        else{
            result(null, res)
        }
    })
}

timeTable.update_attendence = function(tId, result){
    console.log('tid :',tId)
    var sql = `UPDATE practice_time SET atendance = 1 WHERE tId = '${tId}'`
    dbconnection.execute(sql, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(null, res)
        }
    })
}

timeTable.ShowDetails = function(sId, result){
    var sql = `select * from practice_time where sid = '${sId}'`
    dbconnection.execute(sql, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(null,res)
        }
    })
}


module.exports = timeTable
