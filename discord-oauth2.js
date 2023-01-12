const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    const {code} = req.query;
    res.cookie('code', code, {path: "/", maxAge: '6000000'});
    res.send('<h1>Authorized</h1>');
});




module.exports = router;        