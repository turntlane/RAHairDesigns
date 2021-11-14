const Pool = require('pg').Pool
const dotenv = require('dotenv');
dotenv.config({
    path: '../.env'
})

const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'RAHairDesigns'
})

module.exports = pool