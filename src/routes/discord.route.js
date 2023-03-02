const express = require('express');
const router = express.Router();
const discordService = require('../services/discord.service');

router.get('/me', async (req, res) => {
    const {token} = req;
    try {
        const user = await discordService.getUser(token);
        return res.send(user);
    }
    catch(e) {
        console.log(e);
        return res.status(500).end();
    }
});

router.get('/guilds', async (req, res) => {
    const {token} = req;
    try {
        const guilds = await discordService.getUserGuildsAvailable(token);
        return res.send(guilds);
    }
    catch(e) {
        console.log(e);
        return res.status(500).end();
    }
});

router.get('/user-bot-guilds', async (req, res) => {
    const {token} = req;
    try {
        const guilds = await discordService.getMutualGuilds(token);
        return res.send(guilds);
    }
    catch(e) {
        console.log(e);
        return res.status(500).end();
    }
});

module.exports = router;                          