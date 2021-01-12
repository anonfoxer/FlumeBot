const commando = require('discord.js-commando');

class redditors extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'femaleredditor',
            group: 'copypasta',
            memberName: 'femaleredditor',
            description: 'A female, on le Reddit?'
        })
    }

    async run(message, args) {  
        var msg = "A female, on le Reddit? Hang on fellas I got this! Tips fedora brim over eyes to give an aura of mystery and glides up to you on my light up heelies. H-hi mlady, would you perhaps consider being my qt 3.14 gf? snickers nefariously /thinks to self/ man if this works, Ill get this cute girl to be my girlfriend and Ill ride the cool roller coasters! cmon, luck be a lady tonight! cross fingers and gulps s-so...adjusts collar and looks firmly what do you say to my proposal? waits patiently :3 Plzrespond, Im a nice guy who will treat you right unlike all those other assholes who only care about looks! Dont ignore me you rancid swine I knew it #niceguys finish last! Youre probably out having dinner with Chad now! REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";
        try {
            message.delete();
            message.channel.send(msg);
        }
        catch {
            message.channel.send("An error occured, probably due to network issues or lack of permissions.");
        }
    }
}

module.exports = redditors