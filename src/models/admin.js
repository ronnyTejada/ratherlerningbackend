const { Schema, model } = require("mongoose");

// https://mongoosejs.com/docs/schematypes.html
const adminSchema = new Schema({
  username: String,
  password: String,
}); 

module.exports = model("Admin", adminSchema);
