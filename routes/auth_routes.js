const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const auth = require("../middleware/auth_middleware");
const AuthenticationController = require("./../controllers/authentication_controller");

router.post("/login", 
    // celebrate({
    //     body: {
    //         username: Joi.string().required(),
    //         password: Joi.string().required()
    //     }
    // }), 
    AuthenticationController.login);

module.exports = router;