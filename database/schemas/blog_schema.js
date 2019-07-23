const { Schema } = require("mongoose");

const BlogSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        // get: val => val.toLocalDateString()
        // required: true
    },
    title: {
        type: String,
        // required: true
    },
    body: {
        type: String,
        // required: true
    },
    tags : {
        type: Array,
        // required: true
    }
});

module.exports = BlogSchema;