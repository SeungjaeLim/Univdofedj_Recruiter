const mysql = require('mysql');
const conn = { 
    init: function() {
         return mysql.createConnection({
          host     : 'localhost',
          port     : '3306',
          user     : 'root',
          password : '1234',
          database : 'recuiterdb' 
        }); 
    }, 
    open: function(con) {
        con.connect(err => { 
            if(err) { 
                console.log("MySQL 연결 실패 : ", err); 
            } 
            else { 
                console.log("MySQL Connected!!!"); 
            } 
        }); 
    }, 
    close: function(con) { 
        con.end(err => { 
            if(err) { 
                console.log("MySQL 종료 실패 : ", err); 
            } 
            else { 
                console.log("MySQL Terminated..."); 
            } 
        }) 
    } 
} 

module.exports = conn;
