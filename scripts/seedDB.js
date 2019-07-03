const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eventDB"
);

const eventSeed = [
  {
    location: "Sharkeys Bar",
    time: "7:30 pm",
    game: "Texas Holdem",
    date: 2019 / 07 / 29
  },
  {
    location: "Sharkeys Bar",
    time: "8:30 pm",
    game: "Texas Holdem",
    date: 2019 / 07 / 29
  },
  {
    location: "Your Mom's House",
    time: "5:30 pm",
    game: "Texas Holdem",
    date: 2019 / 07 / 25
  }
];

db.Event
  .remove
  .then(() => db.LocalLogins.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + "events inserted!")
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });