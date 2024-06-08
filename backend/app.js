const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');

var app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const userRoutes = require('./src/Router/userRoutes');
const studentsRoutes = require('./src/Router/studentsRoutes')
const paymentRoutes = require('./src/Router/paymentRouter')
const timeRouters = require('./src/Router/timeRouter')
const examRouters = require('./src/Router/examRouter')
const adminRouters = require('./src/Router/adminRouter')
const serviceRouters = require('./src/Router/ServiceRouter')
const trialRouters = require('./src/Router/TrialRouter')
const e = require('express')


app.use('/api/customers', userRoutes);
app.use('/api/students',studentsRoutes)
app.use('/api/payment',paymentRoutes)
app.use('/api/time',timeRouters)
app.use('/api/exam',examRouters)
app.use('/api/admin', adminRouters)
app.use('/api/service', serviceRouters)
app.use('/api/trial', trialRouters)

app.get('/files/:id', async (req, res) => {
  const fileId = req.params.id;

  try {
    const fileData = await db.getFileDataById(fileId);

    if (!fileData) {
      return res.status(404).send('File not found');
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.set('Content-Type', 'application/pdf');
        
    res.send(fileData);
  } catch (error) {
    console.error('Error fetching file data:', error);
    res.status(500).send('Internal server error');
  }
});



module.exports = app;

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});