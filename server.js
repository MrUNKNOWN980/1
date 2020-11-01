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
 z!anti ban {1 to 4}
 z!anti kick {1 to 4}
 z!anti roleC {1 to 4}
 z!anti rolelD {1 to 4}
 z!anti channel {1 to 4}
 z!anti channelC { 1 to 4 }
 z!anti time { 0.1 }
 z!antibots on 
 z!antibots off 
 z!settings
**General** **:tools:**
 z!server 
 z!invite 
 z!bot 
 z!members
**Moderation** **:lock:**
 z!ban
 z!kick
 z!lock 
 z!unlock 
 z!clear 
   **anti** **:no_entry_sign:**
  [ @ everyone @ here @ links ] **
[support](https://discord.gg/MhV7Yt8)**  -  **[invite](https://discord.com/oauth2/authorize?client_id=759881502355488799&scope=bot&permissions=8)**`)
    .setTimestamp()
    message.channel.sendEmbed(embed);
  }
});


bot.on('message',function(message) {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info 
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
bot.on('message', message => {

if(message.content.includes("@everyone")){
if(!message.member.hasPermission('MANAGE_MESSAGES')){
message.delete(); 
message.reply("you cant send everyone message")
}

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
bot.on('message', message => {
    if (message.content.startsWith(prefix+"bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setThumbnail(bot.user.avatarURL)
            .setColor('RANDOM')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``servers``', [bot.guilds.size], true)
            .addField('``channels``' , `[ ${bot.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${bot.users.size} ]` , true)
           .addField("**Bot Owner** :  ", `» <@735510419577372743>`, true)
	.addField("**Bot co Owner** :  ", `» <@627168386199191553>`, true)
       .addField("**Bot admin** :  ", `» <@729012830413652098>`, true)
      .addField('``My Prefix``' , `[ ${prefix} ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			       .setFooter(`${bot.user.username}`, bot.user.avatarURL)
      .setTimestamp()
    })
}
});
bot.on('message', function(msg) {
    if(msg.content.startsWith (prefix+'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(` ${msg.guild.name}`)
      .addField('`شوێنی سێرڤەر`:earth_africa:',`[${msg.guild.region}]`,true)
      .addField('`ژمارەی رۆڵەكان`:closed_lock_with_key: ',`[${msg.guild.roles.size}]`,true)
      .addField('`ژمارەی مێمبەرەكان`:busts_in_silhouette:',`[${msg.guild.memberCount}]`,true)
      .addField('`ژمارەی ئۆنڵاینەكان`:green_heart:',`[${msg.guild.members.filter(m=>m.presence.status == 'online').size}]`,true)
      .addField('`ژمارەی ژوری نوسینەكان`:speech_balloon: ',`[${msg.guild.channels.filter(m => m.type === 'text').size}]`,true)
      .addField('`ژمارەی ڤۆیسەكان`:speaking_head:',`[${msg.guild.channels.filter(m => m.type === 'voice').size}]`,true)
      .addField('`ئۆنەری سێرڤەر`:crown: ',`**${msg.guild.owner}**`,true)
      .addField('`ئایدی سێرڤەر`:id: ',`**${msg.guild.id}**`,true)
      .addField('`كاتی دروست كردنی سێرڤەر`:date:',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed})
    }
});
bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("ready", () => {
  console.log(`[!]-------------------------------------[!]`);
  console.log(`Display Name : ${bot.user.username}`);
  console.log(`Public Prefix : ${prefix}`);
  console.log(`Version : 0.0.1`);
  console.log(`[!]-------------------------------------[!]`);
});
bot.on('message', message => {
    if (message.content.startsWith(prefix+"settings")) {
   if (!message.member.hasPermission("ADMINISTRATOR")) return;
	    if(!antibots[message.guild.id]) antibots[message.guild.id] = {
          onoff: 'Off'
        }
	    message.channel.send({
        embed: new Discord.RichEmbed()
            .setTitle('Your Settings')
            .setThumbnail(bot.user.avatarURL)
            .setColor('#000000')
            .addField('AntiBan' ,`Enabled::green_circle: 
Maximum Ban:${config[message.guild.id].banLimit} ` )
            .addField('Anti Kick', `Enabled: :green_circle:
Maximum Kick:${config[message.guild.id].kickLimits}`)
            .addField('Anti Channel',`Enabled: :green_circle:
Maximum ChannelD:${config[message.guild.id].chaDelLimit}
Maximum ChannelC:${config[message.guild.id].chaCrLimit}`)
            .addField('Anti Role' , `Enabled: :green_circle:
Maximum RoleD:${config[message.guild.id].roleDelLimit}
Maximum RoleC:${config[message.guild.id].roleCrLimits}`)
             .addField('Anti Time' , `Enabled: :green_circle:
Maximum Time: ${config[message.guild.id].time}`)
	    
             .setFooter(message.author.username, message.client.avatarURL)     
	    .setTimestamp()
    })
}
});
bot.on('guildCreate', guild => {
  bot.channels.get("772567854373142528").send(`【 ** zyat kra bo am servara** 】
**Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
bot.on('guildDelete', guild => {
  bot.channels.get("772567854373142528").send(`【 ** kick kra lam servara ** 】
**Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
bot.on("ready", () => {
  bot.user.setActivity("z!help It's time to secure your server!", {
    type: "PLAYING"
  });
  bot.user.setStatus();
});
let anti = JSON.parse(fs.readFileSync("./antigrefff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
bot.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      chaCrLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      roleCrLimits: 2,
      time: 30
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send("**just Ownership can on**");
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num) return message.channel.send("[1 to 3]|justnumbersend! **");
      if (isNaN(num)) return message.channel.send("[1 to 3] |  justnumber! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `** lock = | changed: ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num) return message.channel.send(" [1 to 3]| justnumbersend!  **");
      if (isNaN(num)) return message.channel.send("[1 to 3] |justnumber ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `** lock = |changed  : ${config[message.guild.id].kickLimits}**`
      );
    }

    if (message.content.startsWith(prefix + "anti role")) {
      if (!num) return message.channel.send("[1 to 3]| justnumbersend! **");
      if (isNaN(num))
        return message.channel.send(" [1 to 3]| justnumbersend!**");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `** lock = |  changed: ${config[message.guild.id].roleCrLimits}**`
      );
    }

    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num) return message.channel.send(" [1 to 3]| justnumbersend! **");
      if (isNaN(num)) return message.channel.send(" [1 to 3]|justnumber ! **");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `** lock = | changed : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num) return message.channel.send(" ** [1 to 3]| justnumbersend! **");
      if (isNaN(num))
        return message.channel.send(" ** [1 to 3]|justnumber ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `** lock = | changed: ${config[message.guild.id].time}**`
      );
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
bot.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      chaCrLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      roleCrLimits: 2,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("test");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} he cleaned alot of rooms **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("channelCreate", async channel => {
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      chaCrLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      roleCrLimits: 2,
      time: 30
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("test");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username}   he made alot of channels**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
bot.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      chaCrLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      roleCrLimits: 2,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("test");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username}  he made alot of roles**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      chaCrLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      roleCrLimits: 2,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("test");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username}he cleaned alot of roles **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      chaCrLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      roleCrLimits: 2,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} he tried everone ban **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      chaCrLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      roleCrLimits: 2,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("test");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} he tried everone kick**`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[member.guild.id] = {
        banLimit: 2,
        chaDelLimit: 2,
        chaCrLimit: 2,
        roleDelLimit: 2,
        kickLimits: 2,
        roleCrLimits: 2,
        time: 30
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("test");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000 || 30000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(`**⇏ | ${entry.username} he tried everone kick**`)
          );
        anti[member.guild.id + entry.id].actions = 0;
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

//=========={Anit-Bot}========//

let antibots = JSON.parse(fs.readFileSync("./antibot.json", "utf8")); //require antihack.json file
bot.on("message", message => {
  if (message.content.startsWith(prefix + "antibots on")) {
    if (!message.member.hasPermission("Ownership")) return message.reply(":");
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`** You have disabled anti bot!**`);
    fs.writeFile("./antibot.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

///////////////////////////

bot.on("message", message => {
  if (message.content.startsWith(prefix + "antibots off")) {
    if (!message.member.hasPermission("Ownership")) return message.reply(":");
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**You have enabled anti bot! **`);
    fs.writeFile("./antibot.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
bot.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibot.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
//////===============linke bot========================\\\\\
bot.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    let invite = new Discord.RichEmbed()
      .setColor("#000000")
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setThumbnail( message.author.displayAvatarURL)
      .setTitle(
        "**__CLICK HERE TO  LINK BOT__**"
      )
      .setURL(
        `https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=8`
      );
    message.channel.sendEmbed(invite);
  }
});
bot.on('message', message => { 
      if(message.content === prefix + "lock") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('sorry you dont have permissions');
             message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: false
 })
         message.react('🔒')     
        message.channel.send(':lock: | Locked this channel.') 

      
      }
});
bot.on('message', message => { 
      if(message.content === prefix + "unlock") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('sorry you dont have permissions');
             message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: true
 })
         message.react('🔓')     
        message.channel.send(':unlock: | Unlocked this channel.') 

      
      }
});
/////////clear////
bot.on("message", message => {

 

            var args = message.content.substring(prefix.length).split(" ");

            if (message.content.startsWith(prefix + "clear")) {

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');

        var msg;

        msg = parseInt();

     

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

      message.channel.sendMessage("", {embed: {

        title: "🇨 🇱 🇪 🇦 🇷  ",

        color: 0x06DF00,

      

        footer: {

          text: "🇨 🇭 🇦 🇹  "

        }

      }}).then(msg => {msg.delete(3000)});

                          }

 

     

});

// ======== { • anti reklam • }======== //
bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("http")) {
    if (msg.member.hasPermission("MANAGE_MESSAGES")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send link .```");
  }
});
// ======== { • anti here • }======== //
bot.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MANAGE_MESSAGES")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send here .```");
  }
});
bot.login("NzU5ODgxNTAyMzU1NDg4Nzk5.X3D8zA.avp5Vo-gwD3lywrwzcL2MzLgBls");
