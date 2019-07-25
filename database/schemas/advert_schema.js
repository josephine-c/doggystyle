const { Schema } = require("mongoose");

const AdvertSchema = new Schema({
  title: {
    type: String
    // required: true
  },
  body: {
    type: String
    // required: true
  },
  image: {
    type: String
    // required: true
  },
  link: {
    type: String
    // required: true
  }
});

module.exports = AdvertSchema;
