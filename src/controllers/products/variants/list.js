const variants = require('.');
const { sendList } = require('../../../middleware');

const listVariants = ({ Product }) => async (req, res, next) => {
    try {
        const { product_id } = req.params;
        const product = await Product.findOne({ '_id' : product_id });

        if (!product) {
            throw new createError(404, 'Product not found');
        }

        const variants = product.variants;

        sendList(res, { variants })

    } catch (error) {
        next(error);
    }
}

module.exports = listVariants;