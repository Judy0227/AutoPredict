const express = require("express");
const pageController = require("../controllers/pageController");



const router = express.Router();


router.get("/", pageController.Home);
router.get("/signup", pageController.signUpPage)
router.get("/login", pageController.loginPage)



module.exports = router;