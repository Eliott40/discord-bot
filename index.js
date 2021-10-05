const Discord = require ('discord.js');
const bot = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});
const config = require('./config.json');
const prefix = "++";

bot.on('ready', async () => {
    console.log('ready')
    bot.user.setStatus('dnd')
    bot.user.setActivity("les fidjiens", {type: "WATCHING"})
})

bot.on("message", message => {

    if(message.content.startsWith(prefix + "clear")){
    
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            let args = message.content.split(" ");
            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){
                    message.channel.bulkDelete(args[1])
                    message.delete();
                }
                else{
                    message.channel.send("vous devez indiquer un nombre inférieur à **100**")
                }
                
            }
            else{
                message.channel.send("vous devez indiquer un nombre de messages a supprimés")
            }
        }
        else{
            message.channel.send("vous n'avez pas les permissions")
        }
    }
})
bot.login(process.env.TOKEN)