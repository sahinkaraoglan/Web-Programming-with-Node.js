const express = require("express");
const router = express.Router();

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

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    title: "Add a new product",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
  });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
