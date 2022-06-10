
class UserController{
    // functions

    index(req, res){
        res.render('user');
    }
}

module.exports = new UserController;