const express = require("express");
const { createNewUser, authenticateUser } = require("./controller")

const router = express.Router();


// signup
router.post("/signup", async (req, res) => {
    try {
        let { firstName, email, password } = req.body;
        console.log(req.body);
        firstName =firstName.trim();
        email = email.trim();
        password = password.trim();

        // some quick vallidation
        if (!(firstName && email && password )) {
            throw Error("Empty input fields")
        } else if (!/^[ a-zA-Z ]*$/.test(firstName)) {
            throw Error ("Invalid name entered");
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            throw Error("Invalid email entered");
        } else if (password.length < 6) {
            throw Error("password is too short")
        } else {
            // good credentials, create a new user
            const newUser = await createNewUser({
                firstName, email, password
            });
            res.status(200).json(newUser);
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
});

//login
router.post("/", async (req, res) => {
    try {
        let { email, password } = req.body;
        email = email.trim();
        password = password.trim();

        if (!(email && password )) {
            throw Error("Empty credentials supplied");
        }

        const authenticatedUser = await authenticateUser({email, password});

        res.status(200).json(authenticatedUser);
    } catch (error) {
        res.status(400).send(error.message);
     }
})


module.exports = router;