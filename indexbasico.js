const express = require('express')
const app = express()

const faker = require('faker');
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello bitches')
});
// ENDPOINT ESPECIFICOS DEBEN IR ANTES DE LOS DINAMICOS PARA EVITAR QUE TOME EL ENDPOINT COMO param
app.get('/products', function (req, res) {
    let products = [];
    // puedo envirale atrves de la url la cantidad que auiero con una query al final de la ruta
    const cantidad = req.query.cantidad;
    for (let i = 0; i < cantidad; i++) {
        products.push(
            {
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),

            })
        }
    res.json(products)
});


app.listen(port, () => {
    console.log('Escuchando por el puerto hecho por meee: ' + port);
})