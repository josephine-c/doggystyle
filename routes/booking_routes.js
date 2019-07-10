const express = require("express");
const router = express.Router();
// const { celebrate, Joi } = require("celebrate");
const BookingController = require("./../controllers/booking_controller");

router.get("/", BookingController.index);

// router.post("/", BookingController.create);

module.exports = router;