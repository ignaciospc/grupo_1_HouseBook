const path = require('path');
const modelUsers = require(path.join(__dirname, "..", "models", "users"))
const bcrypt = require("bcrypt");


function exportar (req, res, next) {
    res.locals.logueado = false;
    let local = "";

    //hay sesion interna creada? De ser asi agarra los datos de ahi (funcion)
    if(req.session.isLogged){ local = renderSession(req.session) }

    // NO hay sesion interna pero si cookie? Verifica que los datos son legitimo, crea la sesion interna y loguealo (unica ves)
    if(!req.session.isLogged && req.cookies.rId) {local = renderCookie(req.cookies.rId, req.cookies.rEm, req, res)}

    if (local.length != 0) {
        res.locals.logueado = true;
        res.locals.id = local.id;
        res.locals.user = local.user;
        res.locals.email = local.email
    }

    next()
}
module.exports = exportar;


function renderSession(session){
    let local = {
        id : session.iduser,
        user : session.user,
        email : session.email
    }

    
    return local
}

function renderCookie(id, em, req, res){

    let usuario = modelUsers.findId(id);
    delete usuario.password;
    
    let validacion =  bcrypt.compareSync(usuario.email, em); //true or false, 1ro no hash, 2do hash | verifico que email hasheado en la cookie sea el del usuario, sino . Borro la cookie
    if (!validacion) {
        res.cookie('rEm', null, {maxAge: -1})  //MATAR COOKIE
        res.cookie('rId', null, {maxAge: -1})  //MATAR COOKIE
        return ""
    }
    let local = {
        id : usuario.id,
        user: usuario.usuario,
        email : usuario.email
    }

    // logueo el usuario en la session interna para no hacer éste proceso devuelta
    req.session.isLogged = true; 
    req.session.iduser = usuario.id;
    req.session.user = usuario.usuario;
    req.session.email = usuario.email;
    return local;
}


