const express = require('express');
const router = express.Router();
const Plugins = require('../schemas/Plugins');
const Guild = require('../schemas/Guild');

router.get('', async (req, res) => {
    const {guildId} = req.query;
    if(!guildId) {
        return res.status(400).send();
    }
    let plugins = await Plugins.findOne({guild: guildId});
    if(!plugins) {
        plugins = await Plugins.create({guild: guildId});
    }
    return res.send(plugins);
});

router.put('', async (req, res) => {
    const data = req.body.data;
    if(!data.guildId) {
        return res.status(400).send();
    }
    let plugins = await Plugins.findOneAndUpdate({guildId: data.guildId}, data, {new: true});
    return res.send(plugins);
});


router.post('/economy/currency', async (req, res) => {
    const data = req.body.data;
    if(!data.guildId) {
        return res.status(400).send();
    }
    let guild = await Guild.findOneAndUpdate({guildId: data.guildId}, data, {new: true});
    return res.send(guild);
});

module.exports = router;