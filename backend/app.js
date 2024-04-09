const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const userRoutes = require('./src/Router/userRoutes');

app.use('/api/customers', userRoutes);

module.exports = app;