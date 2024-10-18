const { REST, Routes } = require("discord.js");

// ? for creating bot own custom command

//? this below code will register my command to the server which can be used now 

const botToken =
  "";

const commands = [
  {
    name: "create",
    description: "creating short url",
  },
];

const rest = new REST({ version: "10" }).setToken(botToken);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(""), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
