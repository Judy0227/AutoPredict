const express = require("express");
const router = express.Router();

const pageRoutes = require("../frontpage/pageRoutes");
const userRoutes = require("../user/routes")




router.use("/", pageRoutes);
router.use("/", userRoutes);



module.exports = router;