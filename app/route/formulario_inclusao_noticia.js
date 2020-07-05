module.exports = function(app){
    app.get('/inclusao_de_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    });
}