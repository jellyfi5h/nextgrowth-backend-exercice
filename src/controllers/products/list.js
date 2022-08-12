const { sendList } = require('../../middleware');

const list = ({ Product }) => async (req, res, next) => {

    try {
        const products = await Product.find();
        sendList(res, { products });
    } catch {
        next(error);
    }
}

module.exports = list;