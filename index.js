/** IMPORTS **/
const constants = require('./constants.js');
const welcomeListener = require('./welcome.js').welcomeListener;
const soundBoxListener = require('./soundbox.js').soundBoxListener;

/** Connexion to Discord **/

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function () {
    console.log("Connexion established !");

});

bot.login(constants.botID);

/** Activation of every listeners **/

welcomeListener(bot);
soundBoxListener(bot);

