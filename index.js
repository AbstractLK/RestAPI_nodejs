const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/database').connect();

const authRoute = require('./router/auth');
const userRoute = require('./router/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({
    origin: 'http://127.0.0.1:3000' // Set the allowed origin(s) for CORS
}));

//router
app.use('/auth', authRoute);
app.use('/user', userRoute);

app.listen(process.env.APP_PORT,()=>{
    console.log(process.env.APP_NAME + ' started at port 3001');
})