const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const users = [
    { name: "Raju", age: 22 },
    { name: "Yogesh", age: 25 },
    { name: "Shivam", age: 28 }
  ];
  res.render("index", { users });
});

module.exports = router;
