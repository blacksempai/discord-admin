const express = require('express');
const cors = require('cors');
const discordAuth = require('./routes/discord-oauth2.route');
const discord = require('./routes/discord.route');
const cookieParser = require('cookie-parser');
const tokenInterceptor = require('./middlewares/token.middleware');
const app = express();
const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..' , 'public', 'index.html')).toString();

app.use(express.static('public'));

app.get('/dashboard*', (req, res) => {
    res.send(index);
});

app.use(cors());

app.use(cookieParser());

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/auth', discordAuth);

app.use('/discord', tokenInterceptor, discord);

module.exports = app;