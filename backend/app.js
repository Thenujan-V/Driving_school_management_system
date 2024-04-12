const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const userRoutes = require('./src/Router/userRoutes');
const studentsRoutes = require('./src/Router/studentsRoutes')

app.use('/api/customers', userRoutes);
app.use('/api/students',studentsRoutes)


module.exports = app;

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});