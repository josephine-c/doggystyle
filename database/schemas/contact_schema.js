const { Schema } = require("mongoose");

const ContactSchema = new Schema({
    date: {
        type: Date,
        // required: true
    },
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    subject: {
        type: String,
        // required: true
    },
    body: {
        type: String,
        // required: true
    },
    answers: {
        type: Array,
        default: [{
            date: Date,
            body: String
        }]
    }
});

module.exports = ContactSchema;