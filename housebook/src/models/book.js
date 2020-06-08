const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
const fileData = path.join(__dirname, '../data/mockDataBase.json')
=======
const fileData = path.join(__dirname, '../data/librosDataBase.json')
>>>>>>> pruebasIS

let productData = {
    findAll: () => {
        if(!fs.existsSync(fileData) ) { fs.writeFileSync(fileData, "")}; // de no existir el archivo crea uno vacio
        let json = fs.readFileSync(fileData, "utf8")
        let product = json.length == 0? [] : JSON.parse(json)
        return product
    },
    findOne: (imputId) => {
        let product = productData.findAll().find(x => x.id == imputId);        
        return product
<<<<<<< HEAD

    }
=======
    },

    //create Book

    create: (dataBook) => {

        let readJson = productData.findAll();

        dataBook.id = productData.bookId();

        readJson.push(dataBook);

        let writeJson = JSON.stringify(readJson, null, " ");

        fs.writeFileSync(fileData, writeJson)

    },
    bookId: ()=> {

        let readJson = productData.findAll();

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

    
>>>>>>> pruebasIS
}

module.exports = productData