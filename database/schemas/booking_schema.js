const { Schema } = require("mongoose");

const BookingSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        // required: true
    },
    bookingDate: {
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
        default: "Pending",
        // required: true
    },
    paid: {
        type: Boolean,
        default: false,
        // required: true
    }
});

module.exports = BookingSchema;