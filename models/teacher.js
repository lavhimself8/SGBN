const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: String,
  subject: String,
  bio: String,
  image: String,
  social: {
    facebook: String,
    twitter: String,
    linkedin: String,
    pinterest: String,
    instagram: String,
    youtube: String,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
