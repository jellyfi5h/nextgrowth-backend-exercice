const { sendDeleted } = require('../../middleware');
const createError = require('http-errors')

const remove = ({ Product }) => async (req, res, next) => {
    try {
        const { product_id } = req.params;
        const product = await Product.findOne({ product_id });

        if (!product) {
            throw new createError(404, 'Product not found');
        }

        await product.remove();

        sendDeleted(res, { product });

    } catch (error) {
        next(error);
    }
}

module.exports = remove;