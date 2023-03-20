const express = require('express');
const router = express.Router();
const Plugins = require('../schemas/Plugins');

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
    let plugins = await Plugins.findOneAndUpdate(data);
    return res.send(plugins);
});

module.exports = router;