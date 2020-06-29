module.exports =  (req, res, next) => {

    console.log(req.session.isLogged)
    //estas no estas logueado no entres en /profile
    if(req.session.isLogged == undefined) //de no estar logeado. Esta variable vale undefined.
    {
        res.redirect('/account/login')
    }
    next();
}
