const {faker} = require('@faker-js/faker');
const fs = require('fs');
faker.locale = "es";
const express = require('express');
const app = express();

let srt = []

for(let i = 0; i < 100; i++) {
srt +=
faker.commerce.productName() + '\n' +
faker.commerce.price() + '\n' +
//descripcion
faker.lorem.sentence() + '\n' +
//categoria
faker.commerce.department() + '\n' +
//imagen
faker.image.imageUrl() + '\n' +
//id
i + '\n'
}
fs.writeFile("./test.csv", srt, (err) => {
    if (err) console.log(err);
    console.log("archivo guardado");
  });
  
  
//get srt from file
app.get("/test", (req, res) => {
    fs.readFile("./test.csv", "utf8", (err, data) => {
        if (err) throw err;
        res.send(data);
      })
}
)
 


