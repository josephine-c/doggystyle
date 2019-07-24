const mongoose = require("mongoose");
const AdvertSchema = require("./../schemas/advert_schema");

const AdvertModel = mongoose.model("Advert", AdvertSchema);

module.exports = AdvertModel;