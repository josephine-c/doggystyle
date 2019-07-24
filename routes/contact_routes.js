const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const ContactController = require("./../controllers/contact_controller");

router.get("/", ContactController.index);

router.post(
    "/",
    celebrate({
      body: {
        name: Joi.string().required(),
        email: Joi.string()
          .email()
          .required(),
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

router.get("/:id/edit", ContactController.edit);

router.get("/:id", ContactController.show);

router.put(
    "/:id",
    celebrate({
      body: {
        name: Joi.string().required(),
        email: Joi.string()
          .email()
          .required(),
        phone: Joi.string()
          .min(8)
          .required(),
        suburb: Joi.string().required(),
        dogDetails: Joi.string().required(),
        details: Joi.string().required()
      }
    }),
    ContactController.update
  );

router.patch(
    "/:id",
    celebrate({
      body: {
        name: Joi.string().required(),
        email: Joi.string()
          .email()
          .required(),
        phone: Joi.string()
          .min(8)
          .required(),
        suburb: Joi.string().required(),
        dogDetails: Joi.string().required(),
        details: Joi.string().required()
      }
    }),
    ContactController.update
  );

router.delete("/:id", ContactController.destroy);

module.exports = router;