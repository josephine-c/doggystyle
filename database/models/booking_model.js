const dotenv = require("dotenv");
const mongoose = require("mongoose");
const BookingSchema = require("./../schemas/booking_schema");

const BookingModel = mongoose.model("Booking", BookingSchema);

module.exports = BookingModel;
