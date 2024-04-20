const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

const Product = require('./models/product');

const productRoute = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(productRoute);

app.use((req,res,next) =>{
    res.status(404).send('<h1>Page Not Found </h1>');
});

mongoose.connect('mongodb+srv://minhnguyen11a1cmg:HXUeng0iSw8V0ESh@nguyn-app.jt0pvjv.mongodb.net/?retryWrites=true&w=majority&appName=Nguyn-App')
.then(result => 
    {
        app.listen(3000);   
        console.log("Connected Database")
    }
)
.catch(err=>{console.log(err)});