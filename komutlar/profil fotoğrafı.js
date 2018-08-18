const Discord = require('discord.js');


exports.run = function(client, message) {

  const embed =new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setImage(message.author.avatarURL)
  
  message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['pp','profilfotoğrafı'], 
  permLevel: 0 
};

exports.help = {
  name: 'profil fotoğrafı', 
  description: 'mevcut profil fotoğrafınızı gösterir', 
  usage: 'profilfotografı' 
};