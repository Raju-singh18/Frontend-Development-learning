
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const user = { name: "Raju", age: 22 };
  res.render("index", { user });
});

module.exports = router;
