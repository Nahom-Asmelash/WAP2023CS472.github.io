const express= require('express');
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
   res.send (` <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport", content="width" ,initial-scale="1.0">
    <title>Document</title>
    </head>
    <body>
    <form action="add-product" method="post">
        <p>title <input name="title" /></p>
        <p> price <input name ="price" /></p>
        <button> save </button>
        </form>
    </body>
    </html>`);


});
router.post('/add-product',(req,res,next)=>{
    res.json(req.body);
});



module.exports=router;