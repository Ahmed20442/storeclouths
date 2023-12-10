const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const productSchema1 = new Schema({
    title: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});


const Product1 = mongoose.model('Product1', productSchema1);
module.exports = Product1