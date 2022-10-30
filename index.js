const token = 'MTAzMTE1OTgzOTYzMzcwNzA0MQ.GZM4S5.19KG2YVdhabPvYUro1_EEw75rZX5aPQIX6r7lg';
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//起動確認
client.once('ready', async () => {

});
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  if (interaction.commandName === 'PaypayToStake') {
    await interaction.reply('Pong！');
  }
});
//返答
client.on('messageCreate', message => {
  if (message.author.bot) {
    return;
  }

});

//Discordへの接続
client.login(token);