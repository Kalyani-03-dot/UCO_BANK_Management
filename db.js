const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Vandana2004#' ,
    database: uco_bank,
});

const connectDB = async()=>{
    db.connect((err) => {
        if (err) throw err;
        console.log('Connected to MySQL');
        return db;
    });
}



module.exports = connectDB;



