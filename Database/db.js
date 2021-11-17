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

pool.query("DELETE FROM appointments a USING (SELECT MIN(ctid) as ctid, appt_date, appt_time FROM appointments GROUP BY appt_date, appt_time HAVING COUNT(*) > 1 ) b WHERE a.appt_date = b.appt_date AND a.ctid <> b.ctid)")

module.exports = pool