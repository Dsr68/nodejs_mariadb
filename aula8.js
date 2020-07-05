var http = require("http"); //Importando biblioteca http

var server = http.createServer(function(req, res){ //Recebe uma requisição e uma resposta
    var categoria = req.url; //Requisição ao servidor

    if(categoria == '/tecnologia'){
        res.end("<html><body>Noticias de tecnologia</body></html>"); //Resposta do servidor 
    }
    else if(categoria == '/moda'){
        res.end("<html><body>Noticias de moda</body></html>"); //Resposta do servidor
    }
    else if(categoria == '/beleza'){
        res.end("<html><body>Noticias de beleza</body></html>");
    }
    else{
        res.end("<html><body>Portal de noticias</body></html>"); //Resposta do servidor
    }
});
server.listen(3000); //Seleciona a porta para o servidor
