//=============================== - [ Consts ] - ===================================
const Discord = require("discord.js");

const bot = new Discord.Client();

const { Util } = require("discord.js");

const timezone = require("moment-timezone");

const YouTube = require("simple-youtube-api");

const fs = require("fs");

const request = require("request");


const ytdl = require("ytdl-core");

const prefix = ".";

const queue = new Map();

bot.on('message', function(message) {
  if (message.content.toLowerCase() ===prefix + "help") {
      
    let embed = new Discord.RichEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
     .setThumbnail(message.author.displayAvatarURL)
    .setColor("RANDOM")
.setTitle("bot help menu")
    .setDescription(`the prefix of bot is: ${prefix}
 
  **:shield: __𝘀𝗲𝗰𝘂𝗿𝗶𝘁𝘆__ **
  /𝗮𝗻𝘁𝗶 𝗯𝗮𝗻 [ 𝗻𝘂𝗺𝗯𝗲𝗿 ]
  /𝗮𝗻𝘁𝗶 𝗸𝗶𝗰𝗸 [ 𝗻𝘂𝗺𝗯𝗲𝗿 ]
  /𝗮𝗻𝘁𝗶 𝗿𝗼𝗹𝗲𝗗 [ 𝗻𝘂𝗺𝗯𝗲𝗿 ]
  /𝗮𝗻𝘁𝗶 𝗿𝗼𝗹𝗲𝗖 [ 𝗻𝘂𝗺𝗯𝗲𝗿 ]
  /𝗮𝗻𝘁𝗶 𝗰𝗵𝗮𝗻𝗻𝗲𝗹𝗗 [ 𝗻𝘂𝗺𝗯𝗲𝗿 ] 
  /𝗮𝗻𝘁𝗶 𝗰𝗵𝗮𝗻𝗻𝗲𝗹𝗖 [ 𝗻𝘂𝗺𝗯𝗲𝗿 ] 
  /𝗮𝗻𝘁𝗶 𝘁𝗶𝗺𝗲 [ 𝗻𝘂𝗺𝗯𝗲𝗿 ]
  /𝘀𝗲𝘁𝘁𝗶𝗻𝗴𝘀
 **:gear: __𝗽𝘂𝗯𝗹𝗶𝗰 __** 
  /𝗶𝗻𝘃𝗶𝘁𝗲, /𝗽 , /𝗮𝗯𝗼𝘂𝘁, /𝗶𝗻𝗳
  /𝗯𝗼𝘁𝘀 , /𝗯𝗮𝗻𝘀 , /𝗿𝗼𝗹𝗲𝘀,
  /𝗲𝗺𝗼𝗷𝗶 , /𝗯𝗹𝗮𝗰𝗸𝗹𝗶𝘀𝘁 , /𝗺𝗲𝗺𝗯𝗲𝗿𝘀
  /𝘂𝘀𝗲𝗿 , /𝗼𝘄𝗻𝗲𝗿 , /𝗽𝗶𝗻𝗴
  /𝗮𝘃𝗮𝘁𝗮𝗿 , /𝘀𝗲𝗿𝘃𝗲𝗿 , /𝗴𝗶𝗳
  **:zap: __𝗺𝗼𝗱𝗲𝗿𝗮𝘁𝗶𝗼𝗻__** 
  /𝗯𝗮𝗻 , /𝘂𝗻𝗯𝗮𝗻{𝗮𝗹𝗹 - 𝗶𝗱}, /𝗸𝗶𝗰𝗸
  /𝗹𝗼𝗰𝗸 , /𝘂𝗻𝗹𝗼𝗰𝗸 , /𝘀𝗮𝘆 , /𝙨𝙚𝙣𝙙 (𝙬𝙖𝙩)
  /𝗲𝗺𝗯𝗲𝗱 , /𝘀𝗲𝘁𝗻𝗶𝗰𝗸 , /𝗺𝘃𝗮𝗹𝗹
  /𝗰𝗹𝗲𝗮𝗿 , /𝗿𝘂𝗹𝗲𝘀, /𝗺𝗼𝘃𝗲 , 𝘀𝗲𝗿𝘃𝗲𝗿𝙗𝙤𝙩
  /𝗮𝗻𝘁𝗶𝗿𝗲𝗸𝗹𝗮𝗺 𝗼𝗻 , /𝗮𝗻𝘁𝗶𝗿𝗲𝗸𝗹𝗮𝗺 𝗼𝗳𝗳
**__[ 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 ](https://discord.gg/Fb2VwENJkB)__** - **__[ 𝗜𝗡𝗩𝗜𝗧𝗘 ](https://discord.com/api/oauth2/authorize?client_id=791784505832505344&permissions=8&scope=bot)__**
`)
 
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
  bot.user.setActivity(".help It's time to secure your server!", {
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
    SAEWAN.react("🥱");
  }
});

bot.on("message", SAEWAN => {
  if (SAEWAN.content === "Slaw") {
    SAEWAN.channel.send("**🌸 | سڵاو لە تۆش بەخێربێیت**");
    SAEWAN.react("🥱");
  }
});

bot.on("message", SAEWAN => {
  if (SAEWAN.content === "سلاو") {
    SAEWAN.channel.send("**🌸 | سڵاو لە تۆش بەخێربێیت**");
    SAEWAN.react("🥱");
  }
});


bot.on("message", SAEWAN => {
  if (SAEWAN.content === "سڵاو") {
    SAEWAN.channel.send("**🌸 | سڵاو لە تۆش بەخێربێیت**");
    SAEWAN.react("🥱");
  }
});


bot.on("message", SAEWAN => {
  if (SAEWAN.content === "meme") {
    SAEWAN.channel.send("https://glitch.com/edit/#!/relic-intriguing-hortensia");
    SAEWAN.react("📠");
  }
});


bot.on("message", SAEWAN => {
  if (SAEWAN.content === "faek") {
    SAEWAN.channel.send("https://glitch.com/edit/#!/rain-eggplant-hyssop");
    SAEWAN.react("📠");
  }
});

bot.on("message", SAEWAN => {
  if (SAEWAN.content === "muzc") {
    SAEWAN.channel.send("https://glitch.com/edit/#!/stingy-sore-almanac");
    SAEWAN.react("📠");
  }
});



//rasm   // 
bot.on("message", message => {
  const mm = message.mentions.members.first() || message.member;
  if (message.content.startsWith(prefix + "avatar")) {
    const embed = new Discord.RichEmbed()
      .setAuthor(mm.user.tag, mm.user.avatarURL)
      .setTitle(" __**لینکی وێنەکەت**__")
      .setURL(mm.user.avatarURL)
      .setImage(mm.user.avatarURL)
      .setFooter(
        `Requested By : ${message.author.tag}`,
        message.author.avatarURL
      );
    message.channel.send(embed);
  }
});
// 𝙀𝙣𝙫𝙚𝙩𝙞 //

bot.on("message", message => {
  if (message.content === ".invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("=--> بۆ ڕاکێشانی بۆتەکە داگرە <--=")
      .setImage("")
      .setImage(
        "https://cdn.discordapp.com/attachments/771123389418045490/790712924301164544/image0.gif"
      )
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=740195235069427742&permissions=8&scope=bot"
      ) // Type Your Link here after ''
      .setFooter("SHETA:SANFUR.", message.author.avatarURL);
    message.channel.sendEmbed(embed);
  }
});
// anti bots //

bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("http")) {
    if (msg.member.hasPermission("MANAGE_EMOJIS")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send link .```");
  }
});

bot.on("message" , function (message) {
  let args = message.content.trim().split(/ +/g)
     if (args[0].toLowerCase() === prefix + "userinfo") { 

const embed = new Discord.RichEmbed()
.setTitle(`${message.author.username} Profile`)
.setColor("RANDOM")
.setThumbnail(message.author.avatarURL)
.addField(":id: **ID**", message.author.id, true)
.addField("**Tag**", message.author.tag, true)
.addField(":clock9: **Created**", `${message.author.createdAt}`, true)
.addField(":robot: **C'est un bot?**", message.author.bot, true)
.addField("**Status**", message.author.presence.status, true);

message.channel.send(embed);
}
})

bot.on("message" , function (message) {
              let args = message.content.trim().split(/ +/g)
                 if (args[0].toLowerCase() === prefix + "blacklist") {
              
              const embed = new Discord.RichEmbed()
              .setTitle("Blacklist")
              .setDescription("**SecurityBot n'a trouvé aucun utilisateur dans la blacklist.**")
              .setFooter("Crée par Ardahel#6518")
              .setColor("RANDOM")
              message.channel.send(embed)
              }
              })
///////////

 bot.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user}  𝐗𝐎𝐓 𝐎𝐍𝐋𝐀𝐘𝐍𝐊𝐀  𝐃𝐋𝐀𝐊𝐀𝐌 😅😅`)
        .then(msg => {
            msg.delete(10000)
        })
    }
}); 


bot.on('message', async message => {
            if(message.content.includes('@everyone')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` تۆ میوتکرای بەھۆی لێدانی ئێڤریوەن`');
 
 
    }
})


bot.login("NzkxNzg0NTA1ODMyNTA1MzQ0.X-UMyA.YPMWMrdR9b1SCP3jbwM-CtkAjF4");
