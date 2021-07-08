const incidente = {};

incidente.all = (req, res, bot)=>{



    bot.telegram.sendMessage(heroChat, mensaje).then((result)=>{
        console.log("result");
    }).catch((err)=>{
        console.log("err");
    })
};

module.exports = incidente;
