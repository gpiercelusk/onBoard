const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.connect(db);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB Connected..');
  } catch (err) {}
};
