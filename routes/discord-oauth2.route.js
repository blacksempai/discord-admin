const express = require('express');
const axios = require('axios');
const router = express.Router();
const {CLIENT_ID, CLIENT_SECRET} = process.env;

router.get('/profile', async (req, res) => {
    const {code} = req.query;
    if(code) {
        try {
            const params = new URLSearchParams();
            params.append('client_id', CLIENT_ID);
            params.append('client_secret', CLIENT_SECRET);
            params.append('grant_type', 'authorization_code');
            params.append('code', code);
            params.append('redirect_uri', 'http://localhost:25505/auth/profile')
            const {data} = await axios.post('https://discord.com/api/oauth2/token', params, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
            res.cookie('token', data.access_token, {path: '/', maxAge: data.expires_in});
        }
        catch(e) {
            console.log(e);
            return res.status(500).end();
        }
    }
    return res.send('<h1>Authorized</h1>');
});


module.exports = router;        