const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const faker = require('faker');


// importamos el servicio

const productService = require('../services/serviceProduct.js')

// crear una instancia del servicio que importe 

const service = new productService

router.get('/', (req, res) => {
const product = service.find();
res.json(product);

});

router.get('/filter/:id', (req, res) => {
const { id } = req.params;
const product = service.findOne(id);

  
res.json(product);
  res.send('Yo soy un filter');
});

//   Si no se introduce un query seran 10 productos
// const products = [];
// const { size } = req.query;
// // dado que voy a aplicar clean arquitecture , el servicio se lleva a otra capa
//   const limit = size || 5;
//   for (let index = 0; index < limit; index++) {
//     products.push({
      
//       name: faker.commerce.productName(),
//       price: parseInt(faker.commerce.price(), 10),
//       image: faker.image.imageUrl(),
//       id:faker.datatype.uuid(),
//     });
//   }
//   res.json(products);
// res.send('Array enviado');

// });

// las rutas adsolutas van primero que las opcionales
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // todos params los va a enviar como string hay que ponerlos como string
  if(id > '999'){
  res.status(404).json({
    message:'Error 404 recurso no encontrado en el servidor'
  })
  }
  else{
      res.status(201).json({
    id,
    name: 'Product con params',
    price: 33333
  });
  }

});
// este post tiene el mismo endpoint http://localhost:3000/products

router.post('/',(req,res)=>{
  // este body tiene TODA la info que me llega de la solicitud por el POSTMAN
const body = req.body;
res.status(201).json({
  message:'created',
  // data hace que envie la informacion completa
  data:body
});
});

router.post('/create',(req,res)=>{
  // este body tiene TODA la info que me llega de la solicitud por el POSTMAN
const body = req.body;
 const productService = service.postear(body);
res.status(201).json(productService);
});

router.put('/update/:id',(req,res)=>{
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body)
  res.json(product);
});

// parchar solo una cosa
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/delete/:id',(req,res)=>{
  const { id } = req.params;
  
  const respuesta = service.delete(id)
  res.json(respuesta);


})

// para borrar se envia el :id como param del elemtno a borrar e.g http://localhost:3000/products/33 
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;