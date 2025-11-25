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

exports.getIndex = (req, res, next) => {
  const products = Product.getAll();

  res.render("shop/index", {
    title: "Shopping",
    products: products,
    path: "/",
  });
};

exports.getProducts = (req, res, next) => {
  const products = Product.getAll();

  res.render("shop/products", {
    title: "Products",
    products: products,
    path: "/products",
  });
};

exports.getProduct = (req, res, next) => {
  const product = Product.getById(req.params.productid);

  res.render("shop/product-detail", {
    title: product.name,
    product: product,
    path: "/products",
  });
};

exports.getProductDetails = (req, res, next) => {
  res.render("shop/details", {
    title: "Details",
    path: "/details",
  });
};

exports.getCart = (req, res, next) => {
  const products = Product.getAll();

  res.render("shop/cart", {
    title: "Cart",
    path: "/cart",
  });
};

exports.getOrders = (req, res, next) => {
  const products = Product.getAll();

  res.render("shop/orders", {
    title: "Orders",
    path: "/orders",
  });
};
