const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const UserSchema = new Schema({
  // `firstName` will trim leading and trailing whitespace before it's saved
  firstName: {type: String, trim: true, required: "First Name is Required"},
  // `lastName` will trim leading and trailing whitespace before it's saved
  lastName: {type: String, trim: true, required: "Last Name is Required"},
  // `username` is a required field and throws a custom error message if not supplied
  username: {type: String, trim: true, required: "Username is Required"},
  // `password` will trim leading and trailing whitespace before it's saved
  // `password` uses a custom validation function to only accept values 6 characters or more
  password: {type: String, trim: true, required: "Password is Required", validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ] 
},
  // `email` must match the regex pattern below and throws a custom error message if it does not
  email: {type: String, unique: true,match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
  // `date` must be of type Date. The default value is the current date
  userCreated: {type: Date, default: Date.now},
  // `fullName` must be of type String
  fullName: String
});

// Custom Instance Methods

// Custom method `setFullName`
UserSchema.methods.setFullName = function() {
  // Set the current user's `fullName` to their `firstName` and their `lastName` together
  this.fullName = this.firstName + " " + this.lastName;
  // Return the new `fullName`
  return this.fullName;
};


// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
