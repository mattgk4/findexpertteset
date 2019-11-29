const mysql = require('mysql');
const {  promisify } = require('util');

const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) =>{

    if(err){
        if(err.code === 'PROTEOCOL_CONECTION_LOST'){
            console.error('DATABASE CONNECTION WAS LOSSED');
        } if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTION')
        } if(err.code === 'ENCONREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
        if(connection) connection.release();
        console.log('DB is connected');
        return;

    }

});

pool.query = promisify(pool.query);


module.exports = pool;
