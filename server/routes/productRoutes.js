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

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Produkt nenalezeno." });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Chyba při získávání produktu." });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Produkt nenalezeno." });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: "Chyba při aktualizaci produktu." });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Produkt nenalezeno." });
    }
    res.json({ message: "Produkt bylo úspěšně odstraněno." });
  } catch (error) {
    res.status(500).json({ message: "Chyba při mazání produktu." });
  }
});

module.exports = router;
