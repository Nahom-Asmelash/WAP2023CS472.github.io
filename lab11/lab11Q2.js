const http = require('http');
const fs = require('fs');
const path= require('path')
let server = http.createServer((req, res)=>{
    const src = fs.createReadStream('./SadDog.gif');
    src.pipe(res);
})


server.listen(3000, ()=> console.log("server running on port 3000"));