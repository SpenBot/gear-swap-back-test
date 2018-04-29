// DEPENDENCIES //

// connect to database //
const mongoose = require('./connection.js')

// CREATING THE SCHEMA //
const Schema = mongoose.Schema

const ReservationSchema = new Schema({
  "provider": String,
  "renter": String,
  "item": String,
  "date": String,
})

const UserSchema = new Schema({
  "username": String,
  "password": String,
  "zipcode": Number,
  "rating": Number,
  "que": Number,
  "photo_url": String,
  "inventory": [],
  // "reservations": [ReservationSchema]
})



// EXPORT MODULE //
module.exports = {
  UserSchema,
  ReservationSchema
}
