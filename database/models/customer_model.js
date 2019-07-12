const mongoose = require("mongoose");
const CustomerSchema = require("./../schemas/customer_schema");

const CustomerModel = mongoose.model("Customer", CustomerSchema);

module.exports = CustomerModel;