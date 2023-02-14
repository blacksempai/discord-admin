const express = require('express');
const axios = require('axios');
const router = express.Router();
const {CLIENT_ID, CLIENT_SECRET} = process.env;

router.get('/get-token', async (req, res) => {
    const {code} = req.query;
    if(code) {
        try {
            const params = new URLSearchParams({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: 'authorization_code',
                redirect_uri: 'http://localhost:25505/auth/get-token',
                code
            });
            const {data} = await axios.post('https://discord.com/api/oauth2/token', params, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
            res.cookie('token', data.access_token);
            return res.redirect('/dashboard');
        }
        catch(e) {
            console.log(e);
            return res.status(500).end();
        }
    }
});


module.exports = router;        