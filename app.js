const express = require('express');
const app = express();
const cors = require('cors');


const employeeRoutes = require('./routes/employeeRoutes');

app.use(cors());

// routes 
app.use('/test',employeeRoutes);


module.exports = app;