var dbconnection = require('../Config/Db.config');

var customer = function(customer){
    this.first_name = customer.first_name;
    this.last_name = customer.last_name;
    this.email  = customer.email;
    this.password = customer.password ;
}

customer.create_customer = function(newcustomer,result){
   console.log(newcustomer)
    dbconnection.execute("INSERT INTO new_customers (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
     [newcustomer.first_name, newcustomer.last_name, newcustomer.email, newcustomer.password] ,function(err,res){
        if(err){
            if(err.errno == 1062){
                result('exsisting email')
            }
            else{
                result(err,null);             
            }
        } 
        else{
            console.log(res);
            result(null, res);
        }
    })
}

customer.sigin_customer = function(userInfo, result){
    var sql = `SELECT *  FROM new_customers WHERE email='${userInfo.email}'`
    dbconnection.query(sql, function(err, res){
        if(err){
            result(err,null);     
        } 
        else{
            console.log('mail :',userInfo.email)
            console.log('okey: ', res)
            result(null,res)
        }
    })
}

customer.show_details = function(uId, result){
    console.log('uid : ', uId)
    var sql = `SELECT * FROM new_customers WHERE id = '${uId}'`
    dbconnection.query(sql, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(res)
        }
    })
}

customer.update_details = function(customerUpdate, uId, result){
    let query = "UPDATE new_customers SET ";
    const updates = [];


    for (const attribute in customerUpdate) {
        updates.push(`${attribute} = '${customerUpdate[attribute]}'`);
    }

    query += updates.join(", ");
    query += ` WHERE id = ${uId}`;

    dbconnection.query(query, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(res)
        }
    })
}
customer.show_all_users = function(result){
    var sql = `SELECT * FROM new_customers`
    dbconnection.query(sql, function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(res)
        }
    })
}

customer.delete_user = function(user_id, result){
    var sql = `update new_customers set active = ? where id = ?`
    dbconnection.query(sql, [0, user_id], function(err, res){
        if(err){
            result(err, null)
        }
        else{
            result(res)
        }
    })
}





module.exports = customer