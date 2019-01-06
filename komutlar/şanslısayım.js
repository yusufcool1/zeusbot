const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, params) => {
  message.channel.send(':diamond_shape_with_a_dot_inside: **Senin Şanslı Sayın** :diamond_shape_with_a_dot_inside: ')
    number = 8,2,4,1,5,6,7,10,12,13,15,11,8,9,14,19,20,31,30,28,27,33,37,36,34,35,31,25,24,26,29,39,21,22,39,23,29,40
    var random = Math.floor(Math.random() * (number - 1 + 40)) + 0;
    switch(random) {
        case 1: message.channel.send(':small_blue_diamond: 3 :small_blue_diamond: '); message.channel.send(" "); break;
        case 2: message.channel.send(':small_blue_diamond: 4 :small_blue_diamond: '); message.channel.send(':small_blue_diamond: :poop: :small_blue_diamond: '); break;
        case 3: message.channel.send(':small_blue_diamond: 6 :small_blue_diamond: '); message.channel.send(':small_blue_diamond: :poop: :small_blue_diamond:'); break;
        case 4: message.channel.send(':small_blue_diamond: 12 :small_blue_diamond: '); message.channel.send(' '); break;
        case 5: message.channel.send(':small_blue_diamond: 42 :small_blue_diamond: '); message.channel.send(':small_blue_diamond: :poop: :small_blue_diamond:'); break;
        case 6: message.channel.send(':small_blue_diamond: 83 :small_blue_diamond: '); message.channel.send(' '); break;
        case 7: message.channel.send(':small_blue_diamond: 42 :small_blue_diamond: '); message.channel.send(' '); break;
        case 8: message.channel.send(':small_blue_diamond: 31 :small_blue_diamond: '); message.channel.send(':small_blue_diamond: :poop: :small_blue_diamond:'); break;
        case 9: message.channel.send(':small_blue_diamond: 74 :small_blue_diamond: '); message.channel.send(' '); break;
        case 10: message.channel.send(':small_blue_diamond: 1 :small_blue_diamond: '); message.channel.send(' '); break;
        case 11: message.channel.send(':small_blue_diamond: 2 :small_blue_diamond: '); message.channel.send(' '); break;
        case 12: message.channel.send(':small_blue_diamond: 5 :small_blue_diamond: '); message.channel.send(' '); break;
        case 13: message.channel.send(':small_blue_diamond: 99 :small_blue_diamond: '); message.channel.send(':small_blue_diamond: :poop: :small_blue_diamond: '); break;
        case 14: message.channel.send(':small_blue_diamond: 19 :small_blue_diamond: '); message.channel.send(' '); break;
        case 15: message.channel.send(':small_blue_diamond: 10 :small_blue_diamond: '); message.channel.send(' '); break;
        case 16: message.channel.send(':small_blue_diamond: 38 :small_blue_diamond: '); message.channel.send(' '); break;
        case 17: message.channel.send(':small_blue_diamond: 22 :small_blue_diamond: '); message.channel.send(' '); break;
        case 18: message.channel.send(':small_blue_diamond: 52 :small_blue_diamond: '); message.channel.send(' '); break;
        case 19: message.channel.send(':small_blue_diamond: 65 :small_blue_diamond: '); message.channel.send(':small_blue_diamond: :poop: :small_blue_diamond: '); break;
        case 20: message.channel.send(':small_blue_diamond: 76 :small_blue_diamond: '); message.channel.send(' '); break;
        case 21: message.channel.send(':small_blue_diamond: 14 :small_blue_diamond: '); message.channel.send(' '); break;
        case 22: message.channel.send(':small_blue_diamond: 31 :small_blue_diamond: '); message.channel.send(' '); break;
        case 23: message.channel.send(':small_blue_diamond: 63 :small_blue_diamond: '); message.channel.send(' '); break;
        case 24: message.channel.send(':small_blue_diamond: 84 :small_blue_diamond: '); message.channel.send(' '); break;
        case 25: message.channel.send(':small_blue_diamond: 12 :small_blue_diamond: '); message.channel.send(' '); break;
        case 26: message.channel.send(':small_blue_diamond: 87 :small_blue_diamond: '); message.channel.send(' '); break;
        case 27: message.channel.send(':small_blue_diamond: 13 :small_blue_diamond: '); message.channel.send(':small_blue_diamond: :poop: :small_blue_diamond: '); break;
        case 28: message.channel.send(':small_blue_diamond: 57 :small_blue_diamond: '); message.channel.send(' '); break;
        case 29: message.channel.send(':small_blue_diamond: 78 :small_blue_diamond: '); message.channel.send(' '); break;
        case 30: message.channel.send(':small_blue_diamond: 11 :small_blue_diamond: '); message.channel.send(' '); break;
        case 31: message.channel.send(':small_blue_diamond: 79 :small_blue_diamond: '); message.channel.send(' '); break;
        case 32: message.channel.send(':small_blue_diamond: 72 :small_blue_diamond: '); message.channel.send(' '); break;
        case 33: message.channel.send(':small_blue_diamond: 63 :small_blue_diamond: '); message.channel.send(' '); break;
        case 34: message.channel.send(':small_blue_diamond: 71 :small_blue_diamond: '); message.channel.send(' '); break;
        case 35: message.channel.send(':small_blue_diamond: 615:small_blue_diamond: '); message.channel.send(':small_blue_diamond: :poop: :small_blue_diamond: '); break;
        case 36: message.channel.send(':small_blue_diamond: 765:small_blue_diamond: '); message.channel.send(' :small_blue_diamond: :poop: :small_blue_diamond:'); break;
        case 37: message.channel.send(':small_blue_diamond: 656:small_blue_diamond: '); message.channel.send(' :small_blue_diamond: :poop: :small_blue_diamond:'); break;
        case 38: message.channel.send(':small_blue_diamond: 234:small_blue_diamond: '); message.channel.send(':small_blue_diamond: :poop: :small_blue_diamond: '); break;
        case 39: message.channel.send(':small_blue_diamond: 652:small_blue_diamond: '); message.channel.send(':small_blue_diamond: :poop: :small_blue_diamond: '); break;
        case 40: message.channel.send(':small_blue_diamond: 237:small_blue_diamond: '); message.channel.send(' :small_blue_diamond: :poop: :small_blue_diamond:'); break;
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şanslısayım'],
  permLevel: 0
};

exports.help = {
  name: 'şanslısayım',
  description: 'Şanslı Sayınızı Gösterir',
  usage: 'şanslısayım'
};
