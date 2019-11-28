const fs = require("fs");
const sourceDir = "../public/assets/images/pokemon";
const destDir = "../src/pokemon.json"
let listOfMons = [];

fs.readdir(sourceDir, (err, files) => {
    files.forEach(file => {
        listOfMons.push(file);
    })
    fs.writeFile(destDir, JSON.stringify(listOfMons), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
});

