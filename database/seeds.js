require("dotenv").config();
require("./connect");
const UserModel = require("./models/user_model");

//you can hash password with bcrypt here and pass in
const admin = {
    username: "admin",
    password: "admin",
    role: "admin"
}

UserModel.create(admin, function(e) {
    if (e) {
        throw e;
    }
});