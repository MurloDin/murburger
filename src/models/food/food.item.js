const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 99
    },
    desc: {
        type: String,
        required: true,
    },
    photoLocation: {
        type: String,
    }
});

module.exports = mongoose.model('Food', foodSchema)
