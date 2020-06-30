module.exports = (req, res, next) => {

    res.locals.logueado = false;
    
    if(req.session.isLogged) {
        res.locals.logueado = true;
        res.locals.user = req.session.user;
        res.locals.id = req.session.idUser;
    }
    next()

}