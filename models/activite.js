const mongoose = require("mongoose");
const schema = mongoose.Schema;

const activiteSchema = new schema({
  nameactivite:String,
  prix:Number,
  numberparticipatian:Number,
  dateactivite:String,
  image:String,
  jours:Array,
  horaire:Array,
  category:String,
  status:{type:"String", default:"non confirmé"}
});
const activite = mongoose.model("activite", activiteSchema);
module.exports = activite;