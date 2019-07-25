const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const auth = require("../middleware/auth_middleware");
const BookingController = require("./../controllers/booking_controller");

router.get("/", auth, BookingController.index);
router.get("/confirmed", BookingController.getConfirmed);

router.post(
  "/",
  celebrate({
    body: {
      bookingDate: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      details: Joi.string().required()
    }
  }),
  BookingController.create
);

router.get("/:id", auth, BookingController.show);

router.get("/:id/edit", auth, BookingController.edit);

router.put("/:id/confirm", auth, BookingController.confirm);

router.patch("/:id/confirm", auth, BookingController.confirm);

router.put(
  "/bookings",
  celebrate({
    body: {
      bookingDate: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      details: Joi.string().required()
    }
  }),
  BookingController.update
);

router.patch(
  "/bookings",
  celebrate({
    body: {
      bookingDate: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      details: Joi.string().required()
    }
  }),
  BookingController.update
);

router.delete("/:id", auth, BookingController.destroy);

module.exports = router;
