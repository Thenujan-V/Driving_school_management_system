var dbconnection = require('../Config/Db.config')

    const workers = function(worker){
        this.first_name = worker.first_name;
        this.last_name = worker.last_name;
        this.phone_number = worker.phone_number;  
        this.NIC_number = worker.NIC_number;
        this.role = worker.role;
        this.password = worker.password;  
    }

workers.signupEmployee = function(newWorker, result){
    console.log('nw :',newWorker)
    const sql = "INSERT INTO workers (first_name, last_name, phone_number, NIC_number, role, password) VALUES (?, ?, ?, ?, ?, ?)"
    dbconnection.execute(sql, [newWorker.first_name, newWorker.last_name, newWorker.phone_no, 
                        newWorker.NIC_no, newWorker.role, newWorker.password], function(err, res){
                            if(err){
                                if(err.errno == 1062){
                                    result('exsisting phone number')
                                }
                                else{
                                console.log(err);

                                    result(err,null);             
                                }
                            } 
                            else{

                                result(null, res);
                            }
                        })
}

workers.show_all_admins = function(result){
    var sql = `SELECT * FROM workers where role = 'admin'`
    dbconnection.query(sql, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(res)
        }
    })
}
workers.show_all_instructers = function(result){
    var sql = `SELECT * FROM workers where role = 'instructor'`
    dbconnection.query(sql, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(res)
        }
    })
}

workers.worker_signin = function(userInfo, result){
    var sql = `SELECT *  FROM workers WHERE phone_number='${userInfo.phone_no}'`
    dbconnection.query(sql, function(err, res){
        if(err){
            result(err,null);     
        } 
        else{
            // console.log('mail :',userInfo.email)
            console.log('okey: ', res)
            result(null,res)
        }
    })
}

workers.workers_details = function(uId, result){
    console.log('uid : ', uId)
    var sql = `SELECT * FROM workers WHERE wId = '${uId}'`
    dbconnection.query(sql, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(res)
        }
    })
}




module.exports = workers