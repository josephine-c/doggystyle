const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use(morgan("combined"));

app.use(require("./routes"));

app.use(express.static("public"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;
