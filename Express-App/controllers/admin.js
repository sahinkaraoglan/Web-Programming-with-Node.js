/*
const products = [
  {
    name: "samsung S8",
    price: 3000,
    image: "1.jpg",
    description: "iyi telefon",
  },
  {
    name: "samsung S7",
    price: 2000,
    image: "2.jpg",
    description: "idare eder",
  },
  {
    name: "samsung S9",
    price: 4000,
    image: "3.jpg",
    description: "güzel telefon",
  },
  {
    name: "IPhone 7S",
    price: 4500,
    image: "4.jpg",
    description: "ço iyi telefon",
  },
];

*/

const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  const products = Product.getAll();

  res.render("admin/products", {
    title: "Admin Products",
    products: products,
    path: "/admin/products",
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    title: "New Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.name,
    req.body.price,
    req.body.imageUrl,
    req.body.description
  );

  product.saveProduct();
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  const product = Product.getById(req.params.productid);
  res.render("admin/edit-product", {
    title: "Edit Product",
    path: "/admin/products",
    product: product,
  });
};

exports.postEditProduct = (req, res, next) => {
  const product = Product.getById(req.body.id);

  product.name = req.body.name;
  product.price = req.body.price;
  product.imageUrl = req.body.imageUrl;
  product.description = req.body.description;

  Product.Update(product);
  res.redirect("/admin/products");
};
