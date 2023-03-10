require('dotenv').config();
const mongoose = require('mongoose');

const connectionPoint = process.env.CONNECT_THIS;

mongoose.connect(connectionPoint);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - Mongo connection successful!`)
})

mongoose.connection.on('error', (error) => {
    console.log('MongoDB experienced a connection error', error)
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected...')
})