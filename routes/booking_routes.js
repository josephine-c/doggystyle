const express = require("express");
const router = express.Router();
// const { celebrate, Joi } = require("celebrate");
const BookingController = require("./../controllers/booking_controller");

router.get("/", BookingController.index);
router.post("/", BookingController.create);
router.get("/:id/edit", BookingController.edit);
router.get("/:id", BookingController.show);
router.put("/:id", BookingController.update);
router.patch("/:id", BookingController.update);
router.delete("/:id", BookingController.destroy);

// router.post("/", BookingController.create);

module.exports = router;