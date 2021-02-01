var github = require('octonode');
const { Telegraf } = require('telegraf')

const token = require('../configuracion.json');
const bot = new Telegraf(token.telegram);
    
bot.start((contexto) => {
    console.log()
    contexto.reply("Hola soy el bot git es un placer");
});

bot.command('hero', (ctx)=>{
    const client = github.client(token.github);
    var repo = client.repo('francoZuniga32/hero-bot');
    
    var reply = "El comando ingresado no esta completo \n el formato es: /hero -u usuario-github -t titulo -m mensaje";
    var mensaje = ctx.message.text;
    var comandosSeparados = mensaje.split('-');
    if(comandosSeparados.length >= 4){
        var user = comandosSeparados[1].slice(2);
        var titulo = comandosSeparados[2].slice(2);
        var body = comandosSeparados[3].slice(2);
        console.log(titulo);
        repo.createIssue({
            owner: user,
            title: titulo,
            body: body
        }, (ctx)=>{
            console.log(ctx);
        });
        reply = "casdasd";
    }
    ctx.reply(reply);
});

bot.launch();