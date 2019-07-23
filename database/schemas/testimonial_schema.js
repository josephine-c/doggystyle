const { Schema } = require("mongoose");

const TestimonialSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        // get: val => val.toLocaleDateString()
        // required: true
    },
    author: {
        type: String,
        // required: true
    },
    body: {
        type: String,
        // required: true
    },
    dog: {
        type: String,
        // required: true
    }
});

module.exports = TestimonialSchema;