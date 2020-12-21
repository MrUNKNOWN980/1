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

z!lock , z!unlock , z!bot , z!members

**-----------------------------------------------**

z!ban , z!kick , z!profile , z!muveall

**-----------------------------------------------**
   
 @everyone , @here , @links 

**-----------------------------------------------**

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

//  daxstnw krdnoy zhwr    //


bot.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("sorry you dont have permissions");
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    });
    message.react("🔒");
    message.channel.send(":lock: | Locked this channel.");
  }
});
bot.on("message", message => {
  if (message.content === prefix + "unlock") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("sorry you dont have permissions");
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    });
    message.react("🔓");
    message.channel.send(":unlock: | Unlocked this channel.");
  }
});

// here   evrewan //


bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MANAGE_MESSAGES")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send here .```");
  }
});
bot.on("message", message => {
  if (message.content.includes("@everyone")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      message.reply("you cant send everyone message");
    }
  }
});

// membar //

bot.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.channel.guild) return;

  if (message.content === prefix + "members") {
    const embed = new Discord.RichEmbed().setDescription(`**Members info 
:green_heart: online:   ${
      message.guild.members.filter(m => m.presence.status == "online").size
    }
:heart:  dnd:       ${
      message.guild.members.filter(m => m.presence.status == "dnd").size
    }
:yellow_heart:  idle:     ${
      message.guild.members.filter(m => m.presence.status == "idle").size
    }
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount -
      message.guild.members.filter(m => m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m => m.user.bot).size} **`);
    message.channel.send({ embed });
  }
});

bot.on("message", message => {
  if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setThumbnail(bot.user.avatarURL)
        .setColor("RANDOM")
        .addField(
          "``My Ping``",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField("``servers``", [bot.guilds.size], true)
        .addField("``channels``", `[ ${bot.channels.size} ]`, true)
        .addField("``Users``", `[ ${bot.users.size} ]`, true)
        .addField("**Bot Owner** :  ", `» <@735510419577372743>`, true)
        .addField("**Bot co Owner** :  ", `» <@627168386199191553>`, true)
        .addField("**Bot admin** :  ", `» <@642381418361651220>`, true)
        .addField("``My Prefix``", `[ ${prefix} ]`, true)
        .addField("``My Language``", `[ Java Script ]`, true)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp()
    });
  }
});
// ban  kick   //

bot.on('message', message => {
 if(!message.channel.guild) return; 	 	
 
  if (message.author.bot) return;
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (message.content.split(" ")[0].toLowerCase() === prefix + "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
  if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return;
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply('كەسەكە تاگ بكە').then(message => message.delete(4000))
  if (!message.guild.member(user)
  .bannable) return message.reply("ناتوانم باندی بكەم").then(message => message.delete(4000))


  message.guild.member(user).ban(7, user);

message.channel.send(`** ${user.tag} banned from the server ! :airplane: **  `).then(message => message.delete(10000))

}
});
bot.on('message', message => {
 if(!message.channel.guild) return; 	 	
 
  if (message.author.bot) return;
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (message.content.split(" ")[0].toLowerCase() === prefix + "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;
  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) return;
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply('كەسەكە تاگ بكە').then(message => message.delete(4000))
  if (!message.guild.member(user)
  .bannable) return message.reply("ناتوانم كیكی بكەم").then(message => message.delete(4000))


  message.guild.member(user).kick(7, user);

message.channel.send(`** ${user.tag} kicked from the server ! :airplane: **  `).then(message => message.delete(10000))

}
});
//provele//

bot.on("message", async SAEWAN => {
  if (SAEWAN.content.startsWith(prefix + "profile")) {
    SAEWAN.channel.startTyping();
    setTimeout(() => {
      SAEWAN.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      SAEWAN.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${SAEWAN.author.id}`
          }
        ]
      })
    );
  }
});

//slaw//
bot.on("message", SAEWAN => {
  if (SAEWAN.content === "slaw") {
    SAEWAN.channel.send("**🌸 | سڵاو لە تۆش بەخێربێیت**");
    SAEWAN.react("🥰");
  }
});

bot.on("message", SAEWAN => {
  if (SAEWAN.content === "Slaw") {
    SAEWAN.channel.send("**🌸 | سڵاو لە تۆش بەخێربێیت**");
    SAEWAN.react("🥰");
  }
});

bot.on("message", SAEWAN => {
  if (SAEWAN.content === "سلاو") {
    SAEWAN.channel.send("**🌸 | سڵاو لە تۆش بەخێربێیت**");
    SAEWAN.react("🥰");
  }
});

bot.on("message", SAEWAN => {
  if (SAEWAN.content === "سڵاو") {
    SAEWAN.channel.send("**🌸 | سڵاو لە تۆش بەخێربێیت**");
    SAEWAN.react("🥰");
  }
});
//rols // 



bot.login("Nzg1ODExNjY1ODY5MzQwNzAy.X89SJA.qQp0Ai7oNENuTBr21AVisHTcyFY");
