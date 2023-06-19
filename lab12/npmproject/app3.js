const express=require('express');

const app3=express();

const fs=require('fs');

// const path=require('path');

// app3.disable('case sensitive routing');

// console.log(process.env.PORT, process.env.NODE_ENV);
// app3.set('env',process.env.NODE_ENV || 'development');

app3.use(express.urlencoded());


app3.all('/welcome', (req, res,next)=>{
    res.send('Welcome');
});



app3.get('/add-product',(req,res,next)=>{
    res.send(fs.readFileSync('add-product.html','utf-8'));
});
    
    
app3.post('/add-product',(req,res,next)=>{
    console.log('save product...........');
    console.log(req.body);
    res.send('save successfully');
});


app3.listen(3000,()=>console.log('Event app3 is listning'));



