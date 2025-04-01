const express = require("express");
const Animal = require("../models/product");
const Product = require("../models/product");

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Chyba při načítání produktů." });
  }
});


router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Chyba při přidávání produktů." });
  }
});

module.exports = router;
