const fs = require('fs');
const path = require('path');

const dataUsers = path.join(__dirname,"../data/users.Json")

let userData = {

    findAll: () => {
        if(!fs.existsSync(dataUsers) ) { 
            fs.writeFileSync(dataUsers, "")
        }; // de no existir el archivo crea uno vacio

        let json = fs.readFileSync(dataUsers, "utf8")

        let product = json.length == 0? [] : JSON.parse(json)
        
        return product
    },
    createUsers : (infoUser) => {

        let readJson = userData.findAll();

        infoUser.id = userData.createId();

        readJson.push(infoUser);       

        let writeJson = JSON.stringify(readJson, null, " ");

        fs.writeFileSync(dataUsers, writeJson);

    },
    createId : ()=> {

        let readJson = userData.findAll();

        let nroId = 0;

        readJson.forEach( x => 
        {
            if(nroId <= x.id)
            {
                nroId = x.id
            }
        }
        )

        return nroId + 1

    }

    


}



module.exports = userData

