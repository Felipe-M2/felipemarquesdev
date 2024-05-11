const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());

const connection = mysql.createConnection({
    user: process.env.USER_BD,
    password: process.env.SENHA_BD,
    database: process.env.BASE_BD
})

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.listen(3000);