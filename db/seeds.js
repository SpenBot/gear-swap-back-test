// CONFIGURATION //

//// require model exports ////
const Models = require('./models.js')

//// require seed data ////
const UserSeedData = require('./seedsUser.json')

// SEEDING //
// grab individial models that were exported //
const User = Models.User
const Reservation = Models.Reservation

// clear models //
User.remove({})

// clear collections //
User.collection.remove({})

// insert seed data into model collection //
User.collection.insert(UserSeedData)
