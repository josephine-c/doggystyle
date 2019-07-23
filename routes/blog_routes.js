const express = require("express");
const router = express.Router();
// const { celebrate, Joi } = require("celebrate");
const auth = require("../middleware/auth_middleware");
const BlogController = require("./../controllers/blog_controller");

router.get("/", BlogController.index);
router.post("/", BlogController.create);
router.get("/:id", BlogController.show);
router.get("/:id/edit", BlogController.edit);
router.put("/:id", BlogController.update);
router.patch("/:id", BlogController.update);
router.delete("/:id", BlogController.destroy);

module.exports = router;