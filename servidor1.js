const express = require('express')
const app = express()
const port = 8000;
// ENDPOINT ESPECIFICOS DEBEN IR ANTES DE LOS DINAMICOS PARA EVITAR QUE TOME EL ENDPOINT COMO param

app.get('/', function (req, res) {
    res.send('Hello World')
});
app.get('/ruta1', function (req, res) {
    res.send('Hola Helena')
});
app.get('/ruta2', function (req, res) {
    res.json([
        {
            titulo: 'Hello Helena que lindos ojos',
            fecha: '11-33-55',
            date: '22-11-20'
        },
        {
            titulo: 'Hello Sof que lindos pez',
            fecha: '11-33-55',
            date: '22-11-20'
        },
    ])

});
app.get('/rutaconParams/:id', function (req, res) {
    // En el req estan los params que se envien por la url, en la var id lo recojemos y en el json lo enviamos cuando haya GET
    const id =req.params.id
    res.json ({
        id,
        titulo: 'Hello Helena que lindos ojos',
        fecha: '11-33-55',
        date: '22-11-20'
    })
})
app.get('/rutaconParams/:primerid/ruta/:secondid', function (req, res) {
    const {primerid,secondid} =req.params
    res.json ({
        primerid,
        secondid,
        titulo: 'Hello Helena que lindos ojos',
        fecha: '11-33-55',
        date: '22-11-20'
    })
})
// parametros con query, estos son opcionales por eso no van en la ruta
// El query se busca: http://localhost:3000/query1?limit=%27limite1%27&&offset=%27Offset1%27

app.get('/query1', function (req, res) {
    const {limit,offset}= req.query;
    if(limit && offset){
        res.json({
            limit,
            offset
        })
    }
    res.send('No hay parametros en el query')
});


app.listen(port, () => {
    console.log('Escuchando por el puerto: ' + port);
})
