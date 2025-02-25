const req = require("express/lib/request");

const mongoose = require (`mongoose`)

const schema = mongoose.Schema({
    name: { type: String, required: true},
    species: { type: String, required: true},
    age: { type: Number, required: true},
    price: { type: Number, required: true},
});

moduls.exports = mongoose.model("animal", schema);