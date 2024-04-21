const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const userRoutes = require('./src/Router/userRoutes');
const studentsRoutes = require('./src/Router/studentsRoutes')
const paymentRoutes = require('./src/Router/paymentRouter')
const timeRouters = require('./src/Router/timeRouter')
const examRouters = require('./src/Router/examRouter')
const e = require('express')


app.use('/api/customers', userRoutes);
app.use('/api/students',studentsRoutes)
app.use('/api/payment',paymentRoutes)
app.use('/api/time',timeRouters)
app.use('/api/exam',examRouters)



module.exports = app;

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});