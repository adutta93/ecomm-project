const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(cookieParser());

// // DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(() => {
    console.log("PROBLEM CONNECTING DB");
  });


// My routes
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
// const categoryRoute = require('./routes/categoryRoute');
// const productRoute = require('./routes/productRoute');
// const orderRoute = require('./routes/orderRoute');


// // Routers
app.use('/api/',authRoute);
app.use('/api/', userRoute);
// app.use('/api/', categoryRoute);
// app.use('/api/', productRoute);
// app.use('/api/', orderRoute);


// PORT
const port = process.env.PORT || 8080;
// Starting server
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
