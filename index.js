const express = require('express');
const vehicleEnter = require('./routes/entry');
const vehicleExit = require('./routes/exit');
const reserveSpot = require('./routes/reserveSpots');
const app = express();

app.use(express.json());
app.use('/api/entry',vehicleEnter);
app.use('/api/exit',vehicleExit);
app.use('/api/reserveSpots',reserveSpot);

const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/ParkingGarage')  // loacal database
        .then(()=> console.log('MongoDB connected...'))
        .catch(err => console.error('Database error: ', err.message));

const port = process.env.PORT||8000;
app.listen(port,()=> console.log(`Listening on port ${port}...`));