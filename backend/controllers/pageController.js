

const Home = (req, res) => {
    res.render("index", { title : "Home"})
};

const signUpPage = (req, res) => {
    res.render("signup", { title: "Login" })
};

const loginPage = (req, res) => {
    res.render("login", { title: "Login" })
};

module.exports = { Home, signUpPage, loginPage}  