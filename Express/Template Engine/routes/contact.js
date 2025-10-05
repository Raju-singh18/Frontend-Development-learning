
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("contact", {
    email: "support@example.com",
    phone: "+91 9876543210"
  });
});

module.exports = router;
