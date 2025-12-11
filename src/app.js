const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const indexRoutes = require("./routes/index.js");
const apiRoutes = require("./routes/apiRoutes.js");
const viewRoutes = require("./routes/viewRoutes.js");

// middleware
const errorHandler = require("./middlewares/errorHandler.js");
const validator = require("./middlewares/validator.js");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layout");
app.locals.title = "Blog"; // default title to avoid undefined
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// ROUTES

app.use("/", indexRoutes);
app.use("/api", apiRoutes);
app.use("/blog-view", viewRoutes);

// use ERROR HANDLER
app.use(errorHandler);

module.exports = app; // biar bisa di import di file lain
