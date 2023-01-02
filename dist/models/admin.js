"use strict";

var _require = require("mongoose"),
  Schema = _require.Schema,
  model = _require.model;

// https://mongoosejs.com/docs/schematypes.html
var adminSchema = new Schema({
  username: String,
  password: String
});
module.exports = model("Admin", adminSchema);