const Discord = require('discord.js');


exports.run = function(client, message, args) {
    const sayi = args.slice(0).join(' ');
    
    
    if(sayi.length < 1) {
        return message.reply("Komutu -clear (miktar) şeklinde kullan")
    } else {
            message.channel.bulkDelete(sayi);
        message.channel.send("**" + sayi + "ADET MESAJ SİLİNMİŞTİR**").then(msg =>{
            msg.delete("5000")
        });
    }

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["clear"], 
  permLevel: 2
};

exports.help = {
  name: 'clear', 
  description: 'belirtilen miktar kadar mesaj siler', 
  usage: 'clear <miktar>' 
};



