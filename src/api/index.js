const express = require('express');

const routersInit = config =>  {
  const router = express();

  router.use('/generate_token', token());

  return router;
};

module.exports = routersInit;