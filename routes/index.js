const express = require("express");
const router = express.Router();
const BookingRoutes = require("./booking_routes");
const CustomerRoutes = require("./customer_routes");

router.get("/", (req, res) => res.send("Welcome"));
router.use("/bookings", BookingRoutes);
router.use("/customers", CustomerRoutes);


module.exports = router;