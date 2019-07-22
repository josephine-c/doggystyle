const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const ContactController = require("./../controllers/contact_controller");
const BookingRoutes = require("./booking_routes");
const CustomerRoutes = require("./customer_routes");
const ContactRoutes = require("./contact_routes");
const AuthRoutes = require("./auth_routes");

router.get("/", (req, res) => res.send("Welcome"));
router.use("/bookings", BookingRoutes);
// router.use("/customers", CustomerRoutes);

router.post(
  "/contactus",
  celebrate({
    body: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.string()
        .min(8)
        .required(),
      suburb: Joi.string().required(),
      dogDetails: Joi.string().required(),
      details: Joi.string().required()
    }
  }),
  ContactController.create
);

router.use("/contactus", ContactRoutes);
router.use("/admin", AuthRoutes);

module.exports = router;
