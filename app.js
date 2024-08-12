const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Teacher = require("./models/teacher");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
  .then((res) => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/School");
}

// Render the index.ejs page
app.get("/home", async (req, res) => {
  try {
    const teachers = await Teacher.find(); // Fetch all teachers
    res.render("index.ejs", { teachers }); // Pass teachers data to the index.ejs
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Render the gallery page
app.get("/gallery", (req, res) => {
  res.render("gallery.ejs");
});

// Render the teacher data
app.get("/teacher/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id); // Fetch the teacher by ID
    if (!teacher) {
      return res.status(404).render("404-error.ejs"); // Handle not found
    }
    res.render("teachers.ejs", { teacher }); // Pass the teacher data to teachers.ejs
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// 404-error page rendering
app.get("*", (req, res) => {
  res.render("404-error.ejs");
});

// Server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
