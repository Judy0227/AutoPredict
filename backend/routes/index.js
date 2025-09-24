const express = require("express");
const router = express.Router();

const pageRoutes = require("../frontpage/pageRoutes");
const userRoutes = require("../user")
const aiRoutes = require("../openAISetup")
const diagnosticsRoutes = require("../diagnotics");




router.use("/", pageRoutes);
router.use("/", userRoutes);
router.use("/", aiRoutes)
router.use("/diagnose", diagnosticsRoutes);


module.exports = router;