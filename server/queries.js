require('dotenv').config();

const POOL = require('pg').Pool

const pool = new POOL({
    user: process.env.User,
    host: process.env.Host,
    database: process.env.Database,
    password: process.env.Password,
    port: process.env.Port,
  })

  const getProducts = (req, res) => {

    pool.query('SELECT * FROM products', (error, result) =>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
}

module.exports = {
    getProducts,
}