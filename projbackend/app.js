require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// My routes
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/orderRoute');

// Routers
app.use('/api/v1',authRoute);
app.use('/api/v1', userRoute);
app.use('/api/v1', categoryRoute);
app.use('/api/v1', productRoute);
app.use('/api/v1', orderRoute);


// DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true    
}).then(() => {
    console.log("DB CONNECTED");
}).catch(() => {
    console.log("PROBLEM CONNECTING DB");
})

// PORT
const port = process.env.PORT || 8080;
// Starting server
app.listen(port, () => {
    console.log(`App is running at port ${port}`);
});

