// require packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require("./config/db");
const pageRoutes = require("./frontpage/pageRoutes");
const routes = require("./routes");

const app = express();

const { PORT } = process.env;


    // app listening to request
    app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// register view engine
app.set("view engine", "ejs");

app.use("/", pageRoutes);
app.use("/", routes)


// middleware and static files
app.use(express.static("public"));