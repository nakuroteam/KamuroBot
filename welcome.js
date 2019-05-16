exports.welcomeListener = function (bot) {
    bot.on('guildMemberAdd', member => {
        // Send the message to a designated channel on a server:
        const channel = member.guild.channels.find(ch => ch.name === 'accueil');
        // Do nothing if the channel wasn't found on this server
        if (!channel) return;
        // Send a random welcoming message, mentioning the member
        switch(Math.floor(Math.random() * Math.floor(4))){
            case 0:
                channel.send('Bienvenue sur le serveur ' + member.displayName + ' !');
                break;
            case 1:
                channel.send('OHHH DJADJA GENRE ' + member.displayName + ' EST LÀ !');
                break;
            case 2:
                channel.send(member.displayName + ' sauvage apparait ! Utilisez la commande !capture afin de l\'emprisonner à tout jamais! (c\'est faux)');
                break;
            default:
                channel.send('Eeeeeeeet Bienvenue à toi ' + member.displayName + ' !'); //Alternative : `Welcome to the server, ${member}`
        }
    })
}