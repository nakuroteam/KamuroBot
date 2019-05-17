exports.soundBoxListener = function (bot) {
    // Play streams using ytdl-core
    const ytdl = require('ytdl-core');

    bot.on('message', message => {
        if (message.content.startsWith('>ohdjadja')) {
            const streamOptions = { seek: 0, volume: 1 };
            let voiceChannel = message.guild.channels.find(ch => ch.name === 'Général');

            voiceChannel.join().then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=iPGgnzc34tY', { filter : 'audioonly' });
                const dispatcher = connection.playStream(stream, streamOptions);

                connection.playStream(stream).on('end', function () {
                    connection.disconnect();
                });
            }).catch(console.error);
        }
        else if (message.content.startsWith('>leave')) {
        }
    });
}