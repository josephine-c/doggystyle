const { Schema } = require("mongoose");

const BlogSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        // get: val => val.toLocaleDateString()
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
        set: val => val.split(", "),
        // required: true
    }
});

module.exports = BlogSchema;