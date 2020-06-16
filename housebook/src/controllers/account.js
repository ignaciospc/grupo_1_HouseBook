const modelUsers = require("../models/users")
const bcrypt = require("bcrypt");


module.exports = {
    
    login: (req, res) => {
        res.render("housebook/register")
    },

    loginUser : (req, res) => {

        let user = {
            usuario : req.body.usuario,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, 10),
        }

        modelUsers.createUsers(user);

        res.redirect("/")
    }


}