const { Schema } = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    role: {
        type: String,
        // required: true
    }
});

module.exports = UserSchema;