const express = require("express");
const router = express.Router();
// const { celebrate, Joi } = require("celebrate");
const BookingController = require("./../controllers/booking_controller");

router.get("/", BookingController.index);
router.get("/confirmed", BookingController.getConfirmed);
router.post("/", BookingController.create);
router.get("/:id", BookingController.show);
router.get("/:id/edit", BookingController.edit);
router.put("/:id", BookingController.update);
router.patch("/:id", BookingController.update);
router.delete("/:id", BookingController.destroy);

module.exports = router;