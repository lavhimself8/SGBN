const mongoose = require("mongoose");
const Teacher = require("./models/teacher.js");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/School");
}
// only for sample data put in database

let allTeachers = [
  {
    name: "Alice Smith",
    subject: "Mathematics Teacher",
    bio: "Alice has a deep passion for numbers and enjoys making complex mathematical concepts simple for her students.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    social: {
      facebook: "https://facebook.com/alicesmith",
      twitter: "https://twitter.com/alicesmith",
      linkedin: "https://linkedin.com/in/alicesmith",
      pinterest: "https://pinterest.com/alicesmith",
      instagram: "https://instagram.com/alicesmith",
      youtube: "https://youtube.com/alicesmith",
    },
  },
  {
    name: "Robert Brown",
    subject: "Chemistry Teacher",
    bio: "Robert loves the world of chemistry and is dedicated to igniting that same passion in his students through hands-on experiments.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    social: {
      facebook: "https://facebook.com/robertbrown",
      twitter: "https://twitter.com/robertbrown",
      linkedin: "https://linkedin.com/in/robertbrown",
      pinterest: "https://pinterest.com/robertbrown",
      instagram: "https://instagram.com/robertbrown",
      youtube: "https://youtube.com/robertbrown",
    },
  },
  {
    name: "Maria Johnson",
    subject: "Biology Teacher",
    bio: "Maria has a knack for bringing the wonders of biology to life in her classroom, making each lesson an adventure in science.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    social: {
      facebook: "https://facebook.com/mariajohnson",
      twitter: "https://twitter.com/mariajohnson",
      linkedin: "https://linkedin.com/in/mariajohnson",
      pinterest: "https://pinterest.com/mariajohnson",
      instagram: "https://instagram.com/mariajohnson",
      youtube: "https://youtube.com/mariajohnson",
    },
  },
  {
    name: "James Williams",
    subject: "History Teacher",
    bio: "James brings history to life with his engaging storytelling and deep knowledge of world events.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    social: {
      facebook: "https://facebook.com/jameswilliams",
      twitter: "https://twitter.com/jameswilliams",
      linkedin: "https://linkedin.com/in/jameswilliams",
      pinterest: "https://pinterest.com/jameswilliams",
      instagram: "https://instagram.com/jameswilliams",
      youtube: "https://youtube.com/jameswilliams",
    },
  },
  {
    name: "Emily Davis",
    subject: "Geography Teacher",
    bio: "Emily has traveled the world and brings her experiences to the classroom, helping students understand the beauty and diversity of our planet.",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    social: {
      facebook: "https://facebook.com/emilydavis",
      twitter: "https://twitter.com/emilydavis",
      linkedin: "https://linkedin.com/in/emilydavis",
      pinterest: "https://pinterest.com/emilydavis",
      instagram: "https://instagram.com/emilydavis",
      youtube: "https://youtube.com/emilydavis",
    },
  },
];

Teacher.insertMany(allTeachers);
