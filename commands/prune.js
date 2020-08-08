module.exports = {
    name: 'prune',
    description: 'Deletes desired amount of previous chat lines',
    args: true,
    usage: '<1-99>',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply(`That doesn't seem to be a valid number.`);
        } else if (amount <= 1 || amount > 100) {
            return message.reply(`Appropriate range is between 1-99 (Inclusive)`);
        } else {
            // True gives permission to stop once reaching messages
            // older than 2 weeks(Will throw an error)
            message.channel.bulkDelete(amount, true).catch(err => {
                console.log(err);
                message.channel.send(`There was an error trying to prune messages in this channel!`);
            });
        }
    },
};
