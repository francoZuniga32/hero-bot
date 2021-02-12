//llamamos los modulos de telegraf y octonode
var github = require('octonode');
const { Telegraf } = require('telegraf')
var moment = require('moment'); // require
moment().format(); 

const token = require('../configuracion.json');
const bot = new Telegraf(token.telegram);

const database = require('./database');

//instanciamos
const client = github.client(token.github);
var repo = client.repo('francoZuniga32/hero-bot');

bot.start((contexto) => {
    console.log(contecto.chat);
});

bot.help((ctx)=>{
    var mensaje = "Para poder registrarte como hero, tiene que guardar el contacto del bot y ejecutar: /registrar \n";
    ctx.reply("--comandos--");

    console.log(ctx.chat);
});

//comando de registro
bot.command('registrar', (ctx)=>{
    if(ctx.chat.type == "private"){
        //es un chat privado vamos a proceder a registrar este usuario
        let chatId = ctx.chat.id;
        let nombre = ctx.chat.username;
        console.log(chatId);

        database.query('INSERT INTO `hero` (`id`, `nombre`, `chat_id`) VALUES (NULL, ?, ?)',[nombre, chatId], (error, results)=>{
            if (error) throw error;
            else ctx.reply("Se ha registrado como hero!!");
        });
    }
});

bot.command('hero', (ctx)=>{
    //este comando sirve para contactar al hero
    var reply = "El comando ingresado no esta completo \n el formato es: /hero -u usuario-github -t titulo -m mensaje";
    var mensaje = ctx.message.text;
    var comandosSeparados = mensaje.split('-');
    
    if(comandosSeparados.length >= 4){
        var user = comandosSeparados[1].slice(2);
        var titulo = comandosSeparados[2].slice(2);
        var body = comandosSeparados[3].slice(2);
        console.log(titulo);
        //creamos el issue
        repo.createIssue({
            owner: user,
            title: titulo,
            body: body
        }, (ctx)=>{
            console.log(ctx);
        });
        //contactamos al hero de la semana
        database.query("SELECT * FROM hero", (err, heros)=>{
            if(err) console.log(err);
            else{
                console.log(heros);
                if(heros.length > 0) {
                    let indiceHero = moment().week() % heros.length;
                    bot.telegram.sendMessage(heros[indiceHero].chat_id, "Se registro un incidente !!").then((result) => {
                        console.log(result);
                    }).catch((err) => {
                    console.log(err);
                    });
                }else{
                    ctx.reply("no hay heros registrados");
                }
                console.log(ctx.chat);
            }
        });
        reply = "casdasd";
    }
    ctx.reply(reply);
});

bot.launch();
