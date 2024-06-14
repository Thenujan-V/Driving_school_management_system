var adminModel = require('../Model/adminModel')
const jwt = require('jsonwebtoken');


exports.addEmployee = (req, res) => {
    adminModel.signupEmployee(req.body, function(err, adminRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(adminRes)
        }
    })
}
exports.allAdmins = async (req, res) => {
    await adminModel.show_all_admins(function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(customerRes)
        }
    })
}
exports.allInstructers = async (req, res) => {
    await adminModel.show_all_instructers(function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(customerRes)
        }
    })
}

exports.workerSignin = async (req, res) => {
    const secretKey = 'qwertyuioplkjhgfdsazxcvbhytrdxbhgfcvbnjhgfdxsdfghjkkjhgfdfghjkkjhgfdsdfghjhgfddfghjhgfdfghjhgfdfghmkjhgfcxnjhgcdertyuk'; 

    await adminModel.worker_signin(req.body, function(err, workerRes){
        if(err){
            return res.send(err)
        }
        else if(workerRes.length === 0){
            return res.send('false')
        }
        else{
            var results = JSON.parse(JSON.stringify(workerRes))
            const res_password = results[0].password
            const activeStatus = results[0].active
            const req_password = req.body.password

            if((res_password == req_password)  && activeStatus === 1){
                const token = jwt.sign({id: results[0].wId, role: results[0].role}, secretKey, {expiresIn:'24h'})
                console.log(token)
                return res.json({ success: true, token });
            }
            else{
                return res.send('false');
            }
        }
        
    })
}

exports.workersDetails = async (req, res) => {
    await adminModel.workers_details(req.params.uId, function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(customerRes)
        }
    })
}

exports.adminDelete = async (req, res) => {
    await adminModel.admin_delete(req.params.id, function(err, customerRes){
        if(err){
            return res.send(err)
        }
        else{
            return res.send(customerRes)
        }
    })
}