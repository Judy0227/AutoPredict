const express = require("express");
const router = express.Router();

const pageRoutes = require("../frontpage/pageRoutes");
const userRoutes = require("../user")




router.use("/", pageRoutes);
router.use("/user", userRoutes);



module.exports = router;