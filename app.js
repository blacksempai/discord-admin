const express = require('express');
const cors = require('cors');
const discordAuth = require('./routes/discord-oauth2.route');
const discord = require('./routes/discord.route');
const cookieParser = require('cookie-parser');
const tokenInterceptor = require('./middlewares/token.middleware');
const app = express();

app.use(cors());

app.use(cookieParser());

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/auth', discordAuth);

app.use('/discord', tokenInterceptor, discord);

let redirectURL = 'https://discord.com/api/oauth2/authorize?client_id=1063133464741818390&redirect_uri=http%3A%2F%2Flocalhost%3A25505%2Fauth%2Fprofile&response_type=code&scope=identify';

app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1><a href="${redirectURL}">Login</a>`);
});

module.exports = app;