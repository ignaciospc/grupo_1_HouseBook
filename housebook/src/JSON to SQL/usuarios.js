const fs = require('fs')
const db = require("../database/models")
const user = require("../models/users")

let usuarios = user.findAll();

for (let usuario of usuarios){
    delete usuario.id;
    db.usuario.create()
}

