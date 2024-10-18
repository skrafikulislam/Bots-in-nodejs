const botToken =
  "";

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

//? to handle normal user messages
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating short url id for" + url,
    });
  }
  message.reply({
    content: "Hi From Jimmy Bot",
  });
});

//? to handle commands  interaction messages

client.on("interactionCreate", (interaction) => {
  interaction.reply("pong");
});

client.login(botToken);
