const commando = require('discord.js-commando');

class cleanup extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'moderation', 
            memberName: 'purge',
            description: 'Deletes x number of messages from a channel.',
            examples: ['&purge 5'],

            args: [
                {
                    key: 'num',
                    label: 'number',
                    prompt: 'Please input a number between 1 and 100',
                    type: 'integer'

                }
            ]
        });
    }

    async run(message, { num }) {
        var purgelimit = Number(num) + 1;
        message.channel.messages.fetch({ limit: purgelimit }).then(messages => {
        message.channel.bulkDelete(messages);
        message.reply("deleted " + messages.array().length + " messages, including command.");
    }).catch(err => {
        message.channel.send("Failed to delete messages. This may be caused by attempting to delete messages that are over 2 weeks old.");
    });
    }
};

module.exports = cleanup