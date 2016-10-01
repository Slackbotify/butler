#!/usr/bin/env node
'use strict';

const Bot = require('slackbotify');
const config = require('../config');

let bot = new Bot(config.getProperties());

bot.requireRegister(require('butler-plugin-loader'));

bot.run();
