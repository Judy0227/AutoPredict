// require packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
require("./config/db");
const pageRoutes = require("./frontpage/pageRoutes");
const routes = require("./routes");

const app = express();

const { PORT } = process.env;


    // app listening to request
    app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use(express.json());       // for JSON request bodies
app.use(express.urlencoded({ extended: true })); // for form data
app.use("/scripts", express.static(__dirname + "/scripts"));



// register view engine
app.set("view engine", "ejs");
app.use(cors());


app.use("/", pageRoutes);
app.use("/user", routes)


// middleware and static files
app.use(express.static("public"));