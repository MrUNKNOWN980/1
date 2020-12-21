//=============================== - [ Consts ] - ===================================
const Discord = require("discord.js");

const bot = new Discord.Client();

const { Util } = require("discord.js");

const timezone = require("moment-timezone");

const YouTube = require("simple-youtube-api");

const fs = require("fs");

const request = require("request");


const ytdl = require("ytdl-core");

const prefix = "z!";

const queue = new Map();

bot.on("ready", () => console.log("🤖Ready Bot In Online🤖"));

bot.on("message", message => {
  if (message.content === "z!help") {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
       .setFooter(message.author.username, message.author.displayAvatarURL)
     .setThumbnail(message.author.displayAvatarURL)
      .setDescription(`**COMAND HELP MENU**


**The prefix for the bot is: z! **
**Security** **:closed_lock_with_key:**
**-----------------------------------------------**



   **anti** **:no_entry_sign:**
  [ @ everyone @ here @ links ] **
[support](https://discord.gg/MhV7Yt8)**  -  **[invite](https://discord.com/oauth2/authorize?client_id=759881502355488799&scope=bot&permissions=8)**`)
    .setTimestamp()
    message.channel.sendEmbed(embed);
  }
});
bot.on("guildCreate", guild => {
  bot.channels.get("772567854373142528").send(`【 ** zyat kra bo am servara** 】
**Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
});
bot.on("guildDelete", guild => {
  bot.channels.get("772567854373142528").send(`【 ** kick kra lam servara ** 】
**Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
});
bot.on("ready", () => {
  bot.user.setActivity("z!help It's time to secure your server!", {
    type: "PLAYING"
  });
  bot.user.setStatus();
});


;
bot.login("Nzg1ODExNjY1ODY5MzQwNzAy.X89SJA.qQp0Ai7oNENuTBr21AVisHTcyFY");
