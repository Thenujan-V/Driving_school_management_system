const mysql = require('mysql')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(mysql)
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const userRoutes = require('./src/Routes/userRoutes');

