const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const auth = require("../middleware/auth_middleware");
const AdvertController = require("./../controllers/advert_controller");

router.get("/", AdvertController.index);
router.post("/", AdvertController.create);

router.get("/:id", AdvertController.show);
router.get("/:id/edit", AdvertController.edit);
router.put("/:id", AdvertController.update);

router.patch("/:id", AdvertController.update);

router.delete("/:id", AdvertController.destroy);

module.exports = router;