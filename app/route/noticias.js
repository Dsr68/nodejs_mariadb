module.exports = function(app){
    app.get('/noticias', function(req, res){
        var mariadb = require('mariadb');
        var conn = mariadb.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'dsr68dsr87',
            database: 'portal_noticia'
        });

        conn.query('select * from noticia', function(erro, result){
            res.send(result);
        });
            //res.render("noticias/noticias");*/
    });
}