const { Schema } = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true,
        trim: true,
        bcrypt: true
    },
    role: {
        type: String,
        // required: true
    }
});

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = UserSchema;