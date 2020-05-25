const fs = require('fs');
const path = require('path');

const fileData = path.join(__dirname, '../data/mockDataBase.json')

let productData = {
    findAll: () => {
        if(!fs.existsSync(fileData) ) { fs.writeFileSync(fileData, "")}; // de no existir el archivo crea uno vacio
        let json = fs.readFileSync(fileData, "utf8")
        let product = json.length == 0? [] : JSON.parse(json)
        return product
    }
}

module.exports = productData