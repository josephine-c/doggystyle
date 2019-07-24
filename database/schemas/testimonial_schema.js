const { Schema } = require("mongoose");

const TestimonialSchema = new Schema({
    // date: {
    //     type: Date,
    //     default: Date.now,
    //     // get: val => val.toLocaleDateString()
    //     // required: true
    // },
    title: {
        type: String,
        // required: true
    },
    body: {
        type: String,
        // required: true
    },
    author: {
        type: String,
        // required: true
    },
    // approved: {
    //     type: Boolean,
    //     // default: false,
    //     // set: val => val === "true"
    //     // required: true
    // }
});

module.exports = TestimonialSchema;