const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

app.use(cors())
app.use(express.json())

app.post('/appointmentform', async (req, res) => {
    try {
        const {first_name, last_name, email, appt_time, service} = req.body
        const newApt = await pool.query("INSERT INTO appointments (first_name, last_name, email, appt_time, service) VALUES($1, $2, $3, $4, $5) RETURNING *", [first_name, last_name, email, appt_time, service])
        res.json(newApt.rows[0])
    }
    catch (err) {
        console.log(err.message)
    }
})

app.get('/appointmentform', async (req, res) => {
    try {
        const allApts = await pool.query("SELECT * FROM appointments")
        res.json(allApts.rows)
    }
    catch (err) {
        console.error(err.message)
    }
})


app.listen(5500, () => {
    console.log('Server is up on 5500')
}) 