const express = require("express");
const router = express.Router();
const Recenze = require("../models/recenze");


router.get("/", async (req, res) => {
  try {
    const recenze = await Recenze.find().sort({ createdAt: -1 });
    res.json(recenze);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post("/", async (req, res) => {
  const { name, text, rating } = req.body;
  const recenze = new Recenze({ name, text, rating });

  try {
    const newRecenze = await recenze.save();
    res.status(201).json(newRecenze);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
