const express = require('express');
const { errorHandler, isAuthorized } = require('../middleware');

const { Product } = require('../models/product');

const products = require('../controllers/products');
const token = require('../controllers/token');

const models = { Product };

const routersInit = config =>  {
  const router = express();

  router.use('/product', isAuthorized, products(models));
  router.use('/generate_token', token());

  router.use(errorHandler);
  return router;
};

module.exports = routersInit;