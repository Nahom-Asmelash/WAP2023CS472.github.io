const express = require('express');
const productRouter = require('./routes/productRouter');
const app=express();


app.set('env','production');
app.use(express.urlencoded({extended:true}));

app.use(productRouter);

app.listen(4000,()=>console.log('Event starting'));