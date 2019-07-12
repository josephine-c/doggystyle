const { Schema } = require("mongoose");

const CustomerSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
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
    bookings: {
        type: Array,
        // required: true
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active",
        // required: true
    }
});

module.exports = CustomerSchema;