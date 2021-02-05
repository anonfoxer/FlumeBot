const commando = require('discord.js-commando');

class basedCringe extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'based',
            group: 'copypasta',
            memberName: 'based',
            description: 'Based based based cringe.'
        })
    }

    async run(message, args) {  
        var msg = "DUHHH CIRNGE!!!! DUHHH BRINGE!!???!!1 CRINGE!!!!! IS THAT ALL YOU SHITPOSTING FUCKS CAN SAY!!??? DURR BASED BASED BASED CRINGE CRINGE BASED BASED CRINGE CRINGE CRINGE BASED CRINGE I FEEL LIKE IM IN A FUCKING ASYLUM FULL OF DEMENTIA RIDDEN OLD PEOPLE THAT CAN DO NOTHING BUT REPEAT THE SAME FUCKING WORDS ON LOOP LIKE A FUCKING BROKEN RECORD CRINGE CRINGE CRINGE BASED BASED CRINGE ONIONS ONIONS ONIONS SNOYY ONIONS LOL ONIONS!!! CRINGE!!!1 BOOMER!! LE ZOOMER!!!! I AM BOOMER!!!! NO ZOOM ZOOM ZOOMIES ZOOMER GOING ZOOMIES AHGHGH I FUCKING HATE THE INTERNET SO GODDAMN MUCH FUCKJK YOU SHITPOST I HONEST TO GOD HOPE YOUR MOTHER CHOKES ON HER OWN FECES IN HELL YOU COCKSUCKER VUT OHHH I KNOWM MY POST IS CRINGE ISNT IT?? CRINGE CRINGE CRINGR CRINGEY BASED CRINGE BASED REDDIT REDDIT CRINGE ZOOM CRINGE ONIONS REDDIT BASED BASED!!!!!!";
        try {
            message.delete();
            message.channel.send(msg);
        }
        catch {
            message.channel.send("An error occured, probably due to network issues or lack of permissions.");
        }
    }
}

module.exports = basedCringe