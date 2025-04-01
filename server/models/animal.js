const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
