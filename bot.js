const Discord = require('discord.js'),
    meercy = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
meercy.on('guildMemberAdd', member => {
const fuli= member.guild.channels.get("481277680109486110");
if(!fuli) return;
if(fuli) {
setTimeout(() => fuli.send('Welcome To **NoThing.**'), 4000)
}
});
meercy.login(process.env.MEERCY);
