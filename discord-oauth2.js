const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    const body = req.body;
    res.json(body);
});


module.exports = router;