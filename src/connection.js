const mongoose = require("mongoose");

// localhost:27017
const uri = "mongodb+srv://rjt:Nohack00@cluster0.gcqixpk.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);

mongoose
  .connect(uri, {
   
  })
  .catch(err => console.log(err));

export const db = mongoose.connection;

