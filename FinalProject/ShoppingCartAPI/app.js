const express= require('express');

const productRouter=require('./routes/productRouter');
const userRouter=require('./routes/userRouter');
const port=1500;
const app=express(),
bodyParser = require("body-parser");
const path = require('path');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
// //const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
// app.use(bodyParser.json());
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());


const cors = require('cors');
app.use(cors());
app.use('/products',productRouter);
app.use('/logins',userRouter);




// Define the static folder for serving images
app.use(express.static(path.join(__dirname, 'images')));

// Define a route to retrieve an image
app.get('/images/:imageName', (req, res) => {
  const { imageName } = req.params;
  res.sendFile(path.join(__dirname, 'images', imageName));
});
app.get('/', (req,res) => {
    res.send(`<h1>API Running on port ${port}</h1>`);
  });
app.listen(port, () => {
    console.log(`Server listening on the port::::::${port}`);
});