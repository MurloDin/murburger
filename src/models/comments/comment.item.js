const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        max: 5,
        min: 0,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model('Comment', commentSchema)
