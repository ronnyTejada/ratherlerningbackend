"use strict";

var _require = require('mongoose'),
  Schema = _require.Schema,
  model = _require.model;

// https://mongoosejs.com/docs/schematypes.html
var studentSchema = new Schema({
  name: String,
  email: String,
  courseId: String,
  age: String,
  id: String,
  gender: String,
  siblings: Array
});
module.exports = model('Student', studentSchema);