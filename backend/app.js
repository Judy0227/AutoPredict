// require packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const pageRoutes = require("./frontpage/pageRoutes");
const routes = require("./routes");

const app = express();

const { dbURL, PORT } = process.env;

//connect to database
const connectToDb = async () => {
    try {
        await mongoose.connect(dbURL, 
            { useNewUrlParser: true, useUnifiedTopology: true })
            console.log("Connected to database")
    } catch(error) {
        throw Error ("Unable to connect to db")
    }

    // app listening to request
    app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
}

connectToDb();

// register view engine
app.set("view engine", "ejs");

app.use("/", pageRoutes);
app.use("/", routes)


// middleware and static files
app.use(express.static("public"));