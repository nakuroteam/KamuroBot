exports.soundBoxListener = function (bot) {
    bot.on('message', message => {
        let voiceChannel = message.member.voiceChannel;
        if (message.content.startsWith('>ohdjadja') || message.content.startsWith('>OHDJADJA')) {
            playAudioFile(voiceChannel, 'ohdjadja.mp3');
        }
        else if (message.content.startsWith('>yes') || message.content.startsWith('>YES')) {
            playAudioFile(voiceChannel, 'yes.mp3');
        }
        else if (message.content.startsWith('>got') || message.content.startsWith('>GOT')) {
            playYoutubeAudio(voiceChannel, 'https://www.youtube.com/watch?v=HppOkD89ntQ');
        }
        else if (message.content.startsWith('>duel') || message.content.startsWith('>DUEL')) {
            playYoutubeAudio(voiceChannel, 'https://www.youtube.com/watch?v=bsNRJxqQiGE');
        }
        else if (message.content.startsWith('>ah') || message.content.startsWith('>AH')) {
            playYoutubeAudio(voiceChannel, 'https://www.youtube.com/watch?v=XE6YaLtctcI');
        }
        else if(message.content.startsWith('>boss')){
            playYoutubeAudio(voiceChannel, 'https://www.youtube.com/watch?v=sl_WPD7pZTA');
        }
        else if(message.content.startsWith('>quit')){
            if(voiceChannel != null){
                voiceChannel.leave();
            }
        }
    });
}



function playAudioFile(voiceChannel, filename){
    if(voiceChannel != null){
        voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('./ressources/sounds/' + filename);

            dispatcher.on('end', function () {
                setTimeout(function(){
                    voiceChannel.leave();
                }, 2000);
            });
        }).catch(console.error);
    }
    else{
        message.reply('Vous n\'êtes dans aucun channel vocal.');
    }
}

function playYoutubeAudio(voiceChannel, url){
    // Play streams using ytdl-core
    const ytdl = require('ytdl-core');
    const streamOptions = { seek: 0, volume: 1 };
    if(voiceChannel != null){
        voiceChannel.join().then(connection => {
            const stream = ytdl(url, { filter : 'audioonly' });
            const dispatcher = connection.playStream(stream, streamOptions);

            dispatcher.on('end', function () {
                setTimeout(function(){
                    voiceChannel.leave();
                }, 2000);
            });
        }).catch(console.error);
    }
    else{
        message.reply('Vous n\'êtes dans aucun channel vocal.');
    }
}