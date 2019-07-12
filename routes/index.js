const express = require("express");
const router = express.Router();
const BookingRoutes = require("./booking_routes");
const ContactRoutes = require("./contact_routes");

router.get("/", (req, res) => res.send("Welcome"));
router.use("/bookings", BookingRoutes);
router.use("/contactus", ContactRoutes);

module.exports = router;