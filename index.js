const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoute = require('./router/auth');
const userRoute = require('./router/users');

const app = express();
app.use(cors());
app.use(express.json());

//database connection
const database = mongoose.connect(process.env.DATABASE_URL,{});
database.then(res => {
    console.log('Database connected');
});
database.catch(error => {
    console.log('Database error');
});

app.use(cors({
    origin: 'http://127.0.0.1:3000' // Set the allowed origin(s) for CORS
}));

//router
app.use('/auth', authRoute);
app.use('/user', userRoute);

app.listen(3001,()=>{
    console.log(process.env.APP_NAME + ' started at port 3001');
})