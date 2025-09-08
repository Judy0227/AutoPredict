const express = require("express");
const router = express.Router();

const pageRoutes = require("../frontpage/pageRoutes");
const userRoutes = require("../user/routes")
const diagnoseRoutes = require("../openAISetup/index")




router.use("/", pageRoutes);
router.use("/", userRoutes);
router.use("/", diagnoseRoutes)


module.exports = router;