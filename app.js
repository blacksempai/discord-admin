const express = require('express');
const cors = require('cors');
const discordAuth = require('./discord-oauth2');
const app = express();

app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/auth', discordAuth);


module.exports = app;