const express = require('express');
const connectDB = require('./config/db');
// const mongoose = require('mongoose');
// const routes = require('./routes');
const path = require('path');

const app = express();
//connect database
connectDB();
// Define middleware here
//app.use(express.urlencoded());
app.use(express.json({ extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
//app.use(routes);
app.get('/', (req, res) => res.send('API Running'));
// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/onBoard', {
//   useCreateIndex: true,
//   useNewUrlParser: true
// });

const PORT = process.env.PORT || 3001;
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
