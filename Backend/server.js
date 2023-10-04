const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'password',
    database: 'hsinam'
})

app.get('/', (re, res)=> {
    return res.json("From Backend Side");
})

app.get('/branch', (req, res)=>{
    const sql = "SELECT * FROM branch";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log("Listening");
})