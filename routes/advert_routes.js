const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const auth = require("../middleware/auth_middleware");
const AdvertController = require("./../controllers/advert_controller");

router.get("/", AdvertController.index);
router.post(
  "/",
  celebrate({
    body: {
      title: Joi.string().required(),
      body: Joi.string().required(),
      //   image: Joi.string().required(),
      // For future if wanting to add a photo.
      link: Joi.string().required()
    }
  }),
  AdvertController.create
);

router.get("/:id", AdvertController.show);
router.get("/:id/edit", AdvertController.edit);
router.put("/:id", AdvertController.update);

router.patch("/:id", AdvertController.update);

router.delete("/:id", AdvertController.destroy);

module.exports = router;
