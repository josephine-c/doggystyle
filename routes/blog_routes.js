const dotenv = require("dotenv");
const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const auth = require("../middleware/auth_middleware");
const BlogController = require("./../controllers/blog_controller");

router.get("/", BlogController.index);

router.post(
  "/",
  celebrate({
    body: {
      title: Joi.string().required(),
      body: Joi.string().required(),
      tags: Joi.string().required()
    }
  }),
  BlogController.create
);

router.get("/:id", BlogController.show);

router.get("/:id/edit", BlogController.edit);

router.put(
  "/:id",
  // celebrate({
  //     body: {
  //         title: Joi.string().required(),
  //         body: Joi.string().required()
  //     }
  // }),
  BlogController.update
);

router.patch(
  "/:id",
  // celebrate({
  //     body: {
  //         title: Joi.string().required(),
  //         body: Joi.string().required()
  //     }
  // }),
  BlogController.update
);

router.delete("/:id", BlogController.destroy);

module.exports = router;
