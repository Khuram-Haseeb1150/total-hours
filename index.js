const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
// const path = require("path");
 const morgan = require('morgan');


require("dotenv").config();
let env = process.env;

const app = express();
//all route define

// app.use('/checkinUser', express.static('checkinUser'));
// app.use('/checkoutUser', express.static('checkoutUser'));

// app.use("/public", express.static(__dirname + "/public"));
app.use(cors());
app.use(express.json());
//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

const employeeRoute=require('./routes/employee');
app.use('/', employeeRoute);



// app.use(express.urlencoded({ extended: false }));

// app.use("/public", express.static("public"));

app.set("port", process.env.PORT || 8080);

mongoose.connect(env.Mongoose_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => {
    console.log("Yahooo! Connection is Established.");
  })
  .on("error", (err) => {
    console.log("Err: ", err);
  });




  global.__basedir = __dirname;


app.listen(app.get("port"), function () {
  console.log(`Server Started on: http://localhost:${app.get("port")}`);
});
