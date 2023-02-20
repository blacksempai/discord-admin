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

router.get('/guilds', async (req, res) => {
    const {token} = req;
    try {
        const {data} = await axios.get('https://discord.com/api/users/@me/guilds',{
            headers: {'Authorization': 'Bearer '+token}
        });
        const availableServers = data.filter(s => (s.permissions & (1 << 3)) === (1 << 3));
        return res.send(availableServers);
    }
    catch(e) {
        console.log(e);
        return res.status(500).end();
    }
});

module.exports = router;                          