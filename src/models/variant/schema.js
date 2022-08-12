const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const variantSchema = new Schema({
    //stock keeping unit
    sku:{
        type: String,
        unique: true
    },
    specification: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = { variantSchema }