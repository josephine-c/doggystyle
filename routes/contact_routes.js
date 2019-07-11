const express = require("express");
const router = express.Router();
// const { celebrate, Joi } = require("celebrate");
const ContactController = require("./../controllers/contact_controller");

router.get("/", ContactController.index);
router.post("/", ContactController.create);
router.get("/:id/edit", ContactController.edit);
router.get("/:id", ContactController.show);
router.put("/:id", ContactController.update);
router.patch("/:id", ContactController.update);
router.delete("/:id", ContactController.destroy);

// router.post("/", ContactController.create);

module.exports = router;