const http = require('http');
const express = require('express');
const bodyParser = require('body-parser') ;
const userRoutes = require('./routes/userRoutes')
const User = require("./model/userModel")
const sequelize = require('./util/database')
const app = express(); 

app.use(bodyParser.json());
app.use('/',userRoutes);

app.use((error,req,res,next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
})


sequelize.sync().then(res => {
    // console.log(res)
}).catch(err => {
    console.log(err);
});


const server = http.createServer(app);
server.listen(3000) ;
