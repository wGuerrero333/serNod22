// const express = require('express');
// const router = require('./routes/productsRuta');

// import con ES6
// import router from "./routes/productsRuta";



const router = require('./productsRuta');
// const usersRouter = require('./users.router');

function routerApi(app) {
 app.use('/products', router);
//  app.use('/users', productsRouter);
//  app.use('/categories', productsRouter);
}

module.exports = routerApi;