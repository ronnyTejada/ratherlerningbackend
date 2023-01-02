"use strict";

var _require = require('mongoose'),
  Schema = _require.Schema,
  model = _require.model;

// https://mongoosejs.com/docs/schematypes.html
var courseSchema = new Schema({
  title: String,
  description: String,
  students: Array,
  category: String,
  id: String
});
module.exports = model('Course', courseSchema);