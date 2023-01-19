const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/me', async (req, res) => {
    const {token} = req;
    try {
        const {data} = await axios.get('https://discord.com/api/oauth2/@me',{
            headers: {'Authorization': 'Bearer '+token}
        });
        return res.send(data.user);
    }
    catch(e) {
        console.log(e);
        return res.status(500).end();
    }
});

module.exports = router;