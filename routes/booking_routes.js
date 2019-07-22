const express = require("express");
const router = express.Router();
// const { celebrate, Joi } = require("celebrate");
const auth = require("../middleware/auth_middleware");
const BookingController = require("./../controllers/booking_controller");

router.get("/", auth, BookingController.index);
router.get("/confirmed", BookingController.getConfirmed);
router.post("/", BookingController.create);
router.get("/:id", auth, BookingController.show);
router.get("/:id/edit", auth, BookingController.edit);
router.put("/:id/confirm", auth, BookingController.confirm);
router.patch("/:id/confirm", auth, BookingController.confirm);
router.put("/:id", auth, BookingController.update);
router.patch("/:id", auth, BookingController.update);
router.delete("/:id", auth, BookingController.destroy);

module.exports = router;