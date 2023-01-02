require("@babel/polyfill");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { db } = require("./connection");
require('dotenv').config()
import config from "./config";
import Auth from "./routes/auth.routes";
import Course from "./routes/course.routes";
import Student from "./routes/student.routes";
 //settings
app.set("port", process.env.PORT || 3000);
//Middlewates
app.use(express.json());
// 1
app.set("llave", config.llave);
// 2
app.use(bodyParser.urlencoded({ extended: true }));
// 3
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api", Auth);
app.use("/api", Course);
app.use("/api", Student);

async function main() {
  await app.listen(app.get("port"));
  await db.once("open", (_) => {
    console.log("Database is connected");
  });

  // to test the error stop mongod
  await db.on("error", (err) => {
    console.log(err);
  });
  console.log("server on port", app.get("port"));
  console.log(process.env.PORT)
}

main();
