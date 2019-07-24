const { Schema } = require("mongoose");

const AdvertSchema = new Schema({
    title: {
        type: String,
        // required: true
    },
    body: {
        type: String,
        // required: true
    },
    image : {
        type: Array,
        set: val => val.split(", "),
        // required: true
    },
    link : {
        type: Array,
        set: val => val.split(", "),
        // required: true
    },
});

module.exports = AdvertSchema;