const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Product }) => async (req, res, next) => {
  try {
    var product = new Product;
    _.extend(product, req.body);
    await product.save();
    sendCreated(res, { product })
  } catch (error) {
    next(error);
  }
}

module.exports = create;