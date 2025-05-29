const express = require("express");
const Participation = require("../models/participation");

const participationRouter = express.Router();

//add participation
participationRouter.post("/add", async (req, res) => {
  try {
    let newparticipation = new Participation(req.body);
    let result = await newparticipation.save();
    res.send({ participation: result, msg: "participation is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all participations
participationRouter.get("/", async (req, res) => {
  try {
    let result = await Participation.find();
    res.send({ participations: result, msg: "all participations" });
  } catch (error) {
    console.log(error);
  }
});

//get participation by id

participationRouter.get("/:id", async (req, res) => {
  try {
    let result = await Participation.findById(req.params.id);
    res.send({ participation: result, msg: "one participation" });
  } catch (error) {
    console.log(error);
  }
});

//delete participation
participationRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Participation.findByIdAndDelete(req.params.id);
    res.send({ msg: "participation is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update participation
participationRouter.put("/:id", async (req, res) => {
  try {
    let result = await Participation.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ participation: "result", msg: "participation is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = participationRouter;