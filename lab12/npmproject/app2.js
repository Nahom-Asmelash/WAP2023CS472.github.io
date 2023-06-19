const express=require('express');

const app2=express();

const fs=require('fs');

const path=require('path');

app2.disable('case sensitive routing');

console.log(process.env.PORT, process.env.NODE_ENV);
app2.set('env',process.env.NODE_ENV || 'development');

app2.use(express.urlencoded());

app2.use((req, res,next)=>{
    console.log(req.query); // out put - { sorting: 'asc' }
    //res.send('query is here');
    next();
});

app2.use('/students', (req, res, next)=>{
let data=[{
    "userid":1,
    "id":1,
    "title":"sunt aut"
},
{
"userId": 1,
"id": 2,
"title": "qui est esse",
"body": "est rerum tempore"
},
{
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi"
}
];
// res.json(200, data); or
res.status(200).json(data);

});

app2.use('/search',(req, res,next)=>{
    console.log(req.query);
    res.send('Result is here');
});
// /users/1234/posts/p9999
app2.use('/users/:userid/posts/:postid', (req, res, next)=>{
console.log(req.params); // { userid: '1234', postid: 'p9999' }
res.send('req.params check console');
});

app2.use('/add-product',(req,res,next)=>{
    res.send(fs.readFileSync('add-product.html','utf-8'));
});
    
    
app2.use('/save-product',(req,res,next)=>{
    console.log('save product...........');
    console.log(req.body);
    res.send('save successfully');
});


app2.listen(3000,()=>console.log('Event is listning'));



