const express = require('express');

const app = express();

const isLoggedIn= (req, res, next) =>{
    res.send("You're logged in!")
    next();
}

const isAdmin = (req, res, next) =>{
    res.send('Admin access given')
    next();
}

app.get('/login', isLoggedIn);
app.get('/admin', isAdmin);
app.get('/', (req, res) => {
    res.send("App is running...")
});


const port = 8080;
app.listen(port, () => {
    console.log(`App is running at ${port}`)
});