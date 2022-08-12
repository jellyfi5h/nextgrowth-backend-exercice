const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Product }) => async (req, res, next) => {
  try {
    const { product_id } = req.params;
    const product = await Product.findOne({ product_id });

    if (!product) {
        throw new createError(404, 'Product not found');
    }

    _.extend(product, req.body);
    await product.save();
    sendUpdated(res, { product })
  } catch (error) {
    next(error);
  }
}

module.exports = update;