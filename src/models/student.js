const { Schema, model } = require('mongoose');

// https://mongoosejs.com/docs/schematypes.html
const studentSchema = new Schema({
    name: String,
    email: String,
    courseId:String,
    age:String,
    id:String,
    gender:String,
    siblings:Array
   
});

module.exports = model('Student', studentSchema);