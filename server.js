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


;
bot.login("NzU5ODgxNTAyMzU1NDg4Nzk5.X3D8zA.avp5Vo-gwD3lywrwzcL2MzLgBls");
