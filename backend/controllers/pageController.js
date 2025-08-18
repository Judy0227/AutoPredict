

const renderHome = (req, res) => {
    res.render("index", { title : "Home"})
}


module.exports = { renderHome}