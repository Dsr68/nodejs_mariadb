var app = require("./config/server");
var rotaNoticia = require("./app/route/noticias");
var home = require("./app/route/home");
var formulario = require("./app/route/formulario_inclusao_noticia");

rotaNoticia(app);
home(app);
formulario(app);

app.listen(3000, function(){
    //console.log("Servidor funcionando");
    console.log("Servidor ON");
});