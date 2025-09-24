const express = require('express');

const router = express.Router();

// Render diagnostics page
router.get('/diagnostics', (req, res) => {
    res.render('diagnosticQuery'); // Render the diagnostics.ejs view
});


module.exports = router;