const express = require('express');
const cors = require('cors');
const discordAuth = require('./routes/discord-oauth2.route');
const discord = require('./routes/discord.route');
const plugins = require('./routes/plugins.route');
const cookieParser = require('cookie-parser');
const tokenInterceptor = require('./middlewares/token.middleware');
const app = express();
const fs = require('fs');
const path = require('path');
const { connect } = require("mongoose");

connect(process.env.MONGO_URI).then(() => console.log("The client is now connected to the database."))

const index = fs.readFileSync(path.join(__dirname, '..' , 'public', 'index.html')).toString();
const bundle = fs.readFileSync(path.join(__dirname, '..' , 'public', 'bundle.js')).toString();

app.disable('etag');

app.use(express.static('public'));

app.get('*/bundle.js', (req, res) => {
    res.send(bundle);
});

app.get('/dashboard*', (req, res) => {
    res.send(index);
});

app.use(cors());

app.use(cookieParser());

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/auth', discordAuth);

app.use('/discord', tokenInterceptor, discord);

app.use('/plugins', tokenInterceptor, plugins);

module.exports = app;