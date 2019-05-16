/** IMPORTS **/
//import { welcomeListener } from './welcome.js';
const welcomeListener = require('./welcome.js').welcomeListener;
const soundBoxListener = require('./soundbox.js').soundBoxListener;

/** Connexion to Discord **/

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function () {
    console.log("Connexion established !");

});

bot.login('NTc3OTYzNjQyMTIxODc5NTgy.XNsx3A.aGWdmf746b8GF7SUEf05Dq850Y0');

/** Activation of every listeners **/

welcomeListener(bot);
soundBoxListener(bot);

