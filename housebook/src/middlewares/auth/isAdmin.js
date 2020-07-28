module.exports = (req, res, next) => {
    if(!req.session.admin){ //de estar logueado da true, de no estarlo da undefined
        req.session.destroy()
        res.cookie('rEm', null, {maxAge: -1})  //MATAR COOKIE
        res.cookie('rId', null, {maxAge: -1})  //MATAR COOKIE

        res.redirect('/')
    }
    next();

}