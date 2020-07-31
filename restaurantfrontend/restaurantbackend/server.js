const express = require('express');
const app = express(); //instance of express
const cors = require('cors');
const dotenv =  require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const customerUrls = require('./api/customer');
const dishUrls = require('./api/dish');

//initialised dotenv
dotenv.config();

//Database connect with mongoose
mongoose.connect(process.env.DATABASE_CONNECT, {useUnifiedTopology: true}, () => {
    console.log('Restaurant Database is connected.....')
})

app.use(express.json());
app.use(cors());
app.use('/api/dish', dishUrls);
app.use('/api/customer', customerUrls);


app.listen(6000, () => {
    console.log('Restaurant Server is up and running');
})