const express = require("express");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.render("index");
});

// About page
router.get("/about", (req, res) => {
  res.render("about");
});

// Contact page
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
