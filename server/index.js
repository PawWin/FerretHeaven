const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config()
const app = express();
const cookieParser = require('cookie-parser');


const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use('/', require('./routes/authRoutes'));


//database connection
mongoose.connect('mongodb://localhost:27017/Ferret_Heaven')
    .then(() => console.log('Connected to the Database'))
    .catch(err => console.log(err));

//middleware


const port = 3001
app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`)
})