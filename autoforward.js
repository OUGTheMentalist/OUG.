//FORK AND USE IT

// MESSAGES COLLECT FROM THESE CHATS/GROUPS(FROM)
var from = ["xxxxxx-xxxxxxx@g.us"] //ex ["jid1" , "jid2" , "jid3"]

//MESSAGES SEND TO THESE CHATS/GROUPS(TO)
var to = "xxxxxxxx@s.whatsapp.net , xxxxxx-xxxxxxx@g.us "  //ex  "jid1, jid2, jid3"



let {smd, parsedJid} = require('../lib/'),options = {}

options.contextInfo =  {
    forwardingScore: 0,  // set - 999 - for Forward Many Times
    isForwarded: false,  // set - true - for Forward Tag
}


//You can change 👇 this video to audio/sticker/image/text/status
  smd({ on: 'video' }, async (message, text) => {
      if (from.includes(message.jid)) {
          for (jid of parsedJid(to)){
              message.bot.forwardOrBroadCast(jid, message, options)
          }
      }   
  })



/*
smd({ 
    pattern: 'autoforward', 
    fromMe:false,
    type:"areply",
    info :"Forward messages from one group to others"
})
*/

// POWERED BY SUHAIL-MD
// MORE PLUG-INS : https://github.com/SuhailTechInfo/Suhail-Md-Media
