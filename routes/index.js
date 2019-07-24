const express = require("express");
const router = express.Router();
const BookingRoutes = require("./booking_routes");
const ContactRoutes = require("./contact_routes");
const BlogRoutes = require("./blog_routes");
const TestimonialRoutes = require("./testimonial_routes");
const AuthRoutes = require("./auth_routes");
const AdvertRoutes =  require("./advert_routes");

router.get("/", (req, res) => res.send("Welcome"));
router.use("/bookings", BookingRoutes);
router.use("/blog", BlogRoutes);
router.use("/contactus", ContactRoutes);
router.use("/testimonials", TestimonialRoutes);
router.use("/admin", AuthRoutes);
router.use("/advert", AdvertRoutes)

module.exports = router;