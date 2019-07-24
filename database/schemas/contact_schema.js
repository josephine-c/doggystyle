const { Schema } = require("mongoose");

const ContactSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        // get: val => val.toLocaleDateString()
    },
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    phone: {
        type: String,
        // required: true
    },
    suburb: {
        type: String,
        // required: true
    },
    dogDetails: {
        type: String,
        // required: true
    },
    details: {
        type: String,
        // required: true
    },
    // answers: {
    //     type: Array,
    //     default: [{
    //         date: Date,
    //         body: String
    //     }]
    // }
});

module.exports = ContactSchema;
