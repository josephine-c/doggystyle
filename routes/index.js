const express = require("express");
const router = express.Router();
const BookingRoutes = require("./booking_routes");

router.get("/", (req, res) => res.send("Welcome"));
router.use("/bookings", BookingRoutes);


module.exports = router;