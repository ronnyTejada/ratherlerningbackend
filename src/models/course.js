const { Schema, model } = require('mongoose');

// https://mongoosejs.com/docs/schematypes.html
const courseSchema = new Schema({
    title: String,
    description: String,
    students:Array,
    category:String,
    id:String
   
});

module.exports = model('Course', courseSchema);