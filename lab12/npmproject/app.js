const express = require('express');
const app= express();


app.disable('case sensitive routing');
//  app.set('case sensitive routing', true);

console.log(process.env.PORT, process.env.NODE_ENV);
app.set('env', process.env.NODE_ENV || 'development');

app.use((err, req, res, next)=>{
    res.status(500).send('something wrong');
});
app.use((req, res, next)=>{
    console.log('This middleware always runs when it is at the topmost middleware.....');
    // res.send('Hello');
    next();
});



app.use('/users', function(req, res, next){
    console.log('hi-1 .....');
   //  res.send('Hi');
    next();
});
app.use('/users', function(req, res, next){
    console.log('hi....');
    res.send('abc.....');

});



app.listen(3000, () => console.log('listen on 3000'));