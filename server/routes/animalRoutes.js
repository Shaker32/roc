const express = require("express");
const Animal = require("../models/animal");

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ message: "Chyba při načítání zvířat." });
  }
});


router.post("/", async (req, res) => {
  try {
    const newAnimal = new Animal(req.body);
    await newAnimal.save();
    res.status(201).json(newAnimal);
  } catch (error) {
    res.status(400).json({ message: "Chyba při přidávání zvířete." });
  }
});

module.exports = router;
