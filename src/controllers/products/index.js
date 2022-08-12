const { Router:router } = require('express');

const list = require('./list');
const get = require('./get');
const create = require('./create');
const update = require('./update');
const remove = require('./remove');

const { listVariants, getVariant} = require('./variants')

module.exports = (models) => {
    const api = router();

    api.get('/', list(models));
    api.get('/:product_id', get(models));
    api.post('/', create(models));
    api.patch('/:product_id', update(models));
    api.delete('/:product_id', remove(models));

    api.get('/:product_id/variants/', listVariants(models));
    api.get('/:product_id/variants/:variant_id', getVariant(models));

    return api;
}