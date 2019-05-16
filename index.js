/** IMPORTS **/
//import { welcomeListener } from './welcome.js';
const welcomeListener = require('./welcome.js').welcomeListener;

/** Connexion to Discord **/

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function () {
    console.log("Je suis connecté !");
    
});

bot.login('NTc3OTYzNjQyMTIxODc5NTgy.XNsx3A.aGWdmf746b8GF7SUEf05Dq850Y0');

/** Activation of every listeners **/

welcomeListener(bot);

