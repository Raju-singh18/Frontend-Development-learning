
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("about", {
    title: "About Us",
    description: "This is an example About page created with EJS and Express."
  });
});

module.exports = router;
