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


router.get("/:id", async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: "Zvíře nenalezeno." });
    }
    res.json(animal);
  } catch (error) {
    res.status(500).json({ message: "Chyba při získávání zvířete." });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAnimal) {
      return res.status(404).json({ message: "Zvíře nenalezeno." });
    }
    res.json(updatedAnimal);
  } catch (error) {
    res.status(400).json({ message: "Chyba při aktualizaci zvířete." });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
    if (!deletedAnimal) {
      return res.status(404).json({ message: "Zvíře nenalezeno." });
    }
    res.json({ message: "Zvíře bylo úspěšně odstraněno." });
  } catch (error) {
    res.status(500).json({ message: "Chyba při mazání zvířete." });
  }
});

module.exports = router;