const fs = require('fs');
const path = require('path');

const fileData = path.join(__dirname, '../data/librosDataBase.json')

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

    },

    actualizar: (product) => {
        let readJson = productData.findAll();

        readJson = readJson.filter(x => x.id != product.id );        
        readJson.push(product);       
       
        
        let jsonData = JSON.stringify(readJson, null, " ");
        //escribo
        fs.writeFileSync(fileData, jsonData);
        
    },

    eliminar: (product) => {
        let readJson = productData.findAll();

        readJson = readJson.filter(x => x.id != product.id ); //filtro todo menos el libro

        let jsonData = JSON.stringify(readJson, null, " ");
        //escribo
        fs.writeFileSync(fileData, jsonData);

    }

    
    
}

module.exports = productData