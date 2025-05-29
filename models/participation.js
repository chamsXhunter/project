const mongoose = require("mongoose");
const schema = mongoose.Schema;

const participationSchema = new schema({
  nameuser:String,
  activity:String,
  age:Number,
  phone:String,
  date:String,
  payement:String,
  status:{type:"String", default:"non confirmé"}
});
const Participation = mongoose.model("Participation", participationSchema);
module.exports = Participation;