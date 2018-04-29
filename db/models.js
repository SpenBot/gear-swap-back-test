
// DEPENDENCIES //
// require database connection //
const mongoose = require('./connection.js')

//// requiring our exported schemas ////
const Schema = require('./schema.js')

// CREATE MODELS //

// grab individual schemas that were exported //
const UserSchema = Schema.UserSchema
const ReservationSchema = Schema.ReservationSchema

// define model, using a schema //
const User = mongoose.model("User", UserSchema)
const Reservation = mongoose.model("Reservation", ReservationSchema)

// EXPORT MODULE //

//export models //
module.exports = {
  User,
  Reservation
}
