const mongoose = require("mongoose");
const Nugget = require("./models/Nugget");
require("dotenv").config();
require("./conn/conn");

const sampleNuggets = [
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
];

const seedDB = async () => {
  await Nugget.deleteMany({});
  await Nugget.insertMany(sampleNuggets);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();
