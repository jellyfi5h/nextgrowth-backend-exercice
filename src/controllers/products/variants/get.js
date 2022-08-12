const { sendOne } = require('../../../middleware');
const createError = require('http-errors');

const getVariant = ({ Product, Variant }) => async (req, res, next) => {
  try {

    const { product_id, variant_id } = req.params;
    const product = await Product.findOne({ '_id' : product_id });
    // product.find({'variants._id': variant_id});

    variant = product.variants.find(o => o._id == variant_id);
    if (!variant) {
      throw new createError(404, 'Variant not found');
    }

    sendOne(res, { variant });

  } catch (error) {
    next(error);
  }
}

module.exports = getVariant;