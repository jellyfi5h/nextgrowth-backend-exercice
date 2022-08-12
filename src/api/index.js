const express = require('express');

const { Product } = require('../models/product');


const products = require('../controllers/products');
const token = require('../controllers/token');

const models = { Product };

const routersInit = config =>  {
  const router = express();

  router.use('/product', products(models));
  router.use('/generate_token', token());

  return router;
};

module.exports = routersInit;