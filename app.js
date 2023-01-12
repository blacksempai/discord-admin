const express = require('express');
const cors = require('cors');
const discordAuth = require('./discord-oauth2');
const app = express();

app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/auth', discordAuth);

let redirectURL = 'https://discord.com/api/oauth2/authorize?client_id=1063133464741818390&redirect_uri=https%3A%2F%2Fmountain-marbled-diagnostic.glitch.me%2Fauth%2Fprofile&response_type=code&scope=identify';

app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1><a href="${redirectURL}">Login</a>`);
});

module.exports = app;