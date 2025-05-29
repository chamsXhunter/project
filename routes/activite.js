const express = require("express");
const Activite = require("../models/activite");

const activiteRouter = express.Router();

//add activite
activiteRouter.post("/add", async (req, res) => {
  try {
    let newactivite = new Activite(req.body);
    let result = await newactivite.save();
    res.send({ activite: result, msg: "activite is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all activites
activiteRouter.get("/", async (req, res) => {
  try {
    let result = await Activite.find();
    res.send({ activites: result, msg: "all activites" });
  } catch (error) {
    console.log(error);
  }
});

//get activite by id

activiteRouter.get("/:id", async (req, res) => {
  try {
    let result = await Activite.findById(req.params.id);
    res.send({ activite: result, msg: "one activite" });
  } catch (error) {
    console.log(error);
  }
});

//delete activite
activiteRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Activite.findByIdAndDelete(req.params.id);
    res.send({ msg: "activite is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update activite
activiteRouter.put("/:id", async (req, res) => {
  try {
    let result = await Activite.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ activite: "result", msg: "activite is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = activiteRouter;