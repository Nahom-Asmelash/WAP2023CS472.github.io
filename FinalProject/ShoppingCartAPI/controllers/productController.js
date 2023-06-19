const Product = require("../models/product");

exports.save = (req, res, next) => {
  const addedProduct = new Product(
    null,
    req.body.title,
    req.body.description,
    req.body.price
  ).save();
  res.status(201).json(addedProduct);
};

exports.getAll = (req, res, next) => {
  res.status(200).json(Product.getAll());
};

exports.getById = (req, res) => {
  res.status(200).json(Product.getById(req.params.productId));
};

exports.deleteById = (req, res) => {
  res.json(Product.deleteById(req.params.productId));
};

exports.edit = (req, res) => {
  const editedProduct = new Product(
    req.body.title,
    req.body.description,
    req.body.price
  ).edit();
  res.json(editedProduct);
};

exports.placeOrder = (req, res) => {
  const requestedItem = req.body;
  const retVal = [];
  for (const item of requestedItem) {
    const product = Product.getById(item.id);
    if (item.orderCount > product.quantity) {
      return res.status(400).send("Order cannot be placed more than stock");
    }

    product.quantity -= item.orderCount;
    product.edit();
    retVal.push({ ...product, quantity: item.quantity });
  }

  res.status(201).json({ retVal });
};
// exports.placeOrder=(req,res)=>
// {
//     console.log(req.body);
//     const _result=req.body;
//     const placeOrder=[];
//     if(Array.isArray(_result))
//     {
//     for(const item of _result)
//     {
//         const product= Product.getById(item.id);
//         if(item.orderCount>product.quantity)
//         {
//             return res.status(400).send("Product is out of stock");
//         }

//         product.quantity=item.orderCount;
//         product.price=item.price
//         Product.edit();
//         placeOrder.push({...product,quantity:item.quantity,price:item.price});

//     }}
//     else
//     {
//         const $singleObj= req.body;
//         const product=Product.getById($singleObj.id);
//         product.quantity=$singleObj.orderCount;
//         product.price=$singleObj.price;
//         Product.edit();
//         placeOrder.push({...product,quantity:$singleObj.quantity,price:$singleObj.price});
//     }
//     console.log(placeOrder);
//     res.status(201).json({placeOrder});
//}
