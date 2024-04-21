var timeModel = require('../Model/timeModel')

exports.addTime = async (req, res) => {
    await timeModel.insert_time(req.body, function(err, timeRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(timeRes)
        }
    })
}

exports.attendance = async (req, res) => {
    await timeModel.update_attendence(req.body, function(err, attendanceRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(attendanceRes)
        }
    })
}

exports.showTimeTable = (req, res) => {
    timeModel.ShowDetails(req.params.sId, function(err, showRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(showRes)
        }
    })
}
