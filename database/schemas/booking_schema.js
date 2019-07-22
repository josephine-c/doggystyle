const { Schema } = require("mongoose");

const BookingSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
    // get: val => val.toLocalDateString()
    // required: true
  },
  bookingDate: {
    type: String,
    set: val => new Date(val).toDateString()
    // required: true
  },
  firstName: {
    type: String
    // required: true
  },
  lastName: {
    type: String
    // required: true
  },
  email: {
    type: String
    // required: true
  },
  details: {
    type: String
    // required: true
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
    default: "Confirmed"
    // required: true
  },
  paid: {
    type: Boolean,
    default: false,
    set: val => val === "true"
    // required: true
  }
});

module.exports = BookingSchema;
