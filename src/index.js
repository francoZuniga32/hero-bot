var github = require('octonode');
const { Telegraf } = require('telegraf')

const token = require('./configuracion.json');
const bot = new Telegraf(token.telegram);
const client = github.client(token.github);

bot.start((contexto) => {
    contexto.reply("Hola soy el bot git es un placer");
});

/*
var repo = client.repo('francoZuniga32/hero-bot');
console.log(repo);
repo.createIssue({
    owner: "francoZuniga32",
    title: "pepe el pepe",
    body: "contenido del issue"
}, (ctx)=>{
      console.log(ctx);
});*/

bot.launch();