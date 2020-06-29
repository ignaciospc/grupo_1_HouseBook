module.exports =  (req, res, next) => {

    console.log(req.session.isLogged)
    //si estas logueado, no entres a login
    if(req.session.isLogged) //de no estar logueado esta variable vale undefined y pasa de largo
    {
       return res.redirect('/')
    }
    next();
}