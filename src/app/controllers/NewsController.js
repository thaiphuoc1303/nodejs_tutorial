
class NewsController{
    // functions

    index(req, res){
        res.render('home');
    }
}

module.exports = new NewsController;