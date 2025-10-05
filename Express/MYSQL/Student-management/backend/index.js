
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Add student
app.post("/students", async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const [result] = await db.execute(
      "INSERT INTO students (name, age, email) VALUES (?, ?, ?)",
      [name, age, email]
    );
    res.json({ message: "Student added", id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all students
app.get("/students", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM students ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update student
app.put("/students/:id", async (req, res) => {
  try {
    const { name, age, email } = req.body;
    await db.execute(
      "UPDATE students SET name=?, age=?, email=? WHERE id=?",
      [name, age, email, req.params.id]
    );
    res.json({ message: "Student updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete student
app.delete("/students/:id", async (req, res) => {
  try {
    await db.execute("DELETE FROM students WHERE id=?", [req.params.id]);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Backend running at http://localhost:5000"));
