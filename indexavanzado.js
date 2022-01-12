const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;
// Este medleware es necesario para crear el post
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.listen(port, () => {
    console.log('Escuchando por el puerto hecho por el instructor: ' + port);
})