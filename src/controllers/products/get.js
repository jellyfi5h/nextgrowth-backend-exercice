const { sendOne } = require('../../middleware/');

const get = ({ Product }) => async (req, res, next) => {
  try {

    const { product_id } = req.params;
    const product = await Product.findOne({ '_id' : product_id });

    sendOne(res, { product });

  } catch (error) {
    next(error);
  }
}

module.exports = get;