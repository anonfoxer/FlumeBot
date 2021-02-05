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
        let channel = message.channel;

        // fail if number of messages to purge is invalid
        if (num <= 0) {
            return message.channel.send('Purge number must be greater than 0');
        }

        // channel type must be text for .bulkDelete to be available
        else if (channel.type === 'text') {
            return channel.fetchMessages({limit: num})
                .then(msgs => channel.bulkDelete(msgs))
                .then(msgs => message.channel.send(`:tools: ${msgs.size} message(s)`))
                .catch(console.error);
        }
        else {
            return message.channel.reply('You can only use this in text channels!');
        }
    }
};

module.exports = cleanup