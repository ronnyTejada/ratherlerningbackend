"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;
var mongoose = require("mongoose");

// localhost:27017
var uri = "mongodb+srv://rjt:Nohack00@cluster0.gcqixpk.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(uri, {})["catch"](function (err) {
  return console.log(err);
});
var db = mongoose.connection;
exports.db = db;