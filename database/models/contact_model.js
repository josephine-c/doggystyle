const mongoose = require("mongoose");
const ContactSchema = require("./../schemas/contact_schema");

const ContactModel = mongoose.model("Contact", ContactSchema);

module.exports = ContactModel;