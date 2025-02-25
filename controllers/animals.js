const Animal = require("../models/animals")

exports.getAllAnimals =async (req, res, next) => {
    try {
        const data = await Animal.find();
        if (data && data.lenght !==0) {
            return res.status(200).send({
            message: "animals found! ",
            payload: data
       }) ;
    }
    res.status(404).send({
        message: "animals not found!",
    })
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getAnimalById = async (req, res, next) => {
    try {
        const data = await Animal.findById(req.params.id);
        if (data) {
            return res.status(200).send({
            message: "animals found! ",
            payload: data
       }) ;
    }
    res.status(404).send({
        message: "animals not found!",
    })
    } catch (err) {
        res.status(500).send(err);
    }
};
exports.createAnimal = async (req, res, next) => {
     try {
    const data = new Animal({
    name: req.body.name,
    species: req.body.species,
    age: req.body.age,
    price: req.body.price,
    });
    const result = await data.save();
    if (result) {
        return res.status(201).send({
            message: "animal created!",
            payload: result,
        })
    }
    res.status(500).send({
        message: "animal not created"
    })
} catch (err) {
    res.status(500).send(err);
}};
exports.updateAnimal = async (req, res, next) => {try {
    const data = new Animal({
    name: req.body.name,
    species: req.body.species,
    age: req.body.age,
    price: req.body.price,
    });
    const result = await Animal.foundByIdAndUpdate(req.params.id, data);
    if (result) {
        return res.status(200).send({
            message: "animal updated!",
            payload: result,
        })
    }
    res.status(500).send({
        message: "animal not updated"
    })
} catch (err) {
    res.status(500).send(err);
}};
exports.deleteAnimal = async (req, res, next) => {};