const mongoose = require('mongoose');
const { variantSchema } = require('../variant/schema');
const Schema = mongoose.Schema;


const schema = new Schema({
    reference:{
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    variants: [ variantSchema ]

});

module.exports = { schema }