const mongoose = require('mongoose');
const { variantSchema } = require('./schema');

const Variant = mongoose.model('Variant', variantSchema);
module.exports = { Variant };