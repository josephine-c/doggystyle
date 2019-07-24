const mongoose = require("mongoose");
const TestimonialSchema = require("./../schemas/testimonial_schema");

const TestimonialModel = mongoose.model("Testimonial", TestimonialSchema);

module.exports = TestimonialModel;