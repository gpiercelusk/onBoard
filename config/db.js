const mongoose = require('mongoose');
const db = process.env.mongoURI || "mongodb://localhost/onBoard";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB Connected..');
  } catch (err) {
    console.error(err.message);
    //Exit Process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
