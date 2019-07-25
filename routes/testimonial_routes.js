const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const auth = require("../middleware/auth_middleware");
const TestimonialController = require("./../controllers/testimonial_controller");

router.get("/", TestimonialController.index);

router.post(
  "/",
  celebrate({
    body: {
      title: Joi.string().required(),
      body: Joi.string().required(),
      author: Joi.string().required()
    }
  }),
  TestimonialController.create
);

// router.get("/:id/approve", TestimonialController.approveToggle);

// router.get("/:id/approve", TestimonialController.approveToggle);

router.get("/:id", TestimonialController.show);

router.get("/:id/edit", TestimonialController.edit);

router.put(
  "/:id",
  celebrate({
    body: {
      title: Joi.string().required(),
      body: Joi.string().required(),
      author: Joi.string().required()
    }
  }),
  TestimonialController.update
);

router.patch(
  "/:id",
  celebrate({
    body: {
      title: Joi.string().required(),
      body: Joi.string().required(),
      author: Joi.string().required()
    }
  }),
  TestimonialController.update
);

router.delete("/:id", TestimonialController.destroy);

module.exports = router;
