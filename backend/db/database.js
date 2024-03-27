const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password:'Billyk@@1212',
        database:"bookapp"
    }
)
//open the mysql connection


db.connect(error =>{
  if (error) throw error
  console.log("db connected")   
}
    
    
)

module.exports = db