const { Router:router } = require('express');

const listVariants = require('./list');
const getVariant = require('./get');

module.exports = {
    listVariants,
    getVariant
};
