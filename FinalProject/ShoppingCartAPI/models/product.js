let counter = 0;
let localdb=[];

 class Product {
  constructor(id, title, description, price, imageUrl, quantity) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
  }

  save() {
    this.id = ++counter; //start with 1;
    localdb.push(this);
    return this;
  }

  edit() {
    const index = localdb.findIndex((prod) => prod.id == this.id);
    console.log(index);
    localdb.splice(index, 1, this);
    return this;
  }

  static getAll() {
    return localdb;
  }

  static deleteById(prodId) {
    const index = localdb.findIndex((prod) => prod.id == prodId);
    const deletedProd = localdb[index];
    localdb.splice(index, 1);
    return deletedProd;
  }

  static getById(prodId) {
    const index = localdb.findIndex((prod) => prod.id == prodId);
    if (index > -1) {
      return localdb[index];
    } else {
      throw new Error("Not Found");
    }
  }

}

 

localdb = [
  new Product(
    2001,
    "Cotton T-Shirt",
    "Cotton T-Shirt",
    20,
    "/images/tshirt.jpg",
    10
  ),
  new Product(2002, "Denim Jeans", "Denim Jeans", 50, "/images/denim.jpg", 20),
  new Product(
    2003,
    "Casual Dress",
    "Casual Dress",
    35,
    "/images/casual.jpg",
    15
  ),
  new Product(
    2004,
    "Athletic Shoes",
    "Athletic Shoes",
    80,
    "/images/athleticshoes.jpg",
    5
  ),
  new Product(
    2005,
    "Leather Jacket",
    "Leather Jacket",
    120,
    "/images/leatherjacket.jpg",
    8
  ),
];

 module.exports=Product;