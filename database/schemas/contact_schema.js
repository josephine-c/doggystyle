const { Schema } = require("mongoose");

const ContactSchema = new Schema({
    date: {
        type: Date,
        // required: true
    },
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    details: {
        type: String,
        // required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Comfirmed", "Completed", "Cancelled"],
        // required: true
    },
    paid: {
        type: Boolean,
        // required: true
    }
});

module.exports = ContactSchema;