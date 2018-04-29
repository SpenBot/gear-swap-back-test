
////////////// SERVER CONFIGURATION /////////////////////////////////
/////////////////////////////////////////////////////////////////////

/// require external module dependencies ///
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// require models from models.js //
const Models = require('./db/models.js')

/// require database connection module ///
const mongoose = require('./db/connection.js')

/// run app as an express application ///
const app = express();



/// handles json post requests (needed for AJAX requests with JSON bodies) ///
app.use(bodyParser.json())
/// handles form submissions ///
app.use(bodyParser.urlencoded({ extended: true }))


// use cors //
app.use(cors())






////////////// RUN SERVER ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log(`\n\tServer active. Listening on port ${app.get('port')}\n`)
})





////////////// ROUTES ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// grab each model, from exported models //
const User = Models.User



// USERS ROUTES //

// get all users //
app.get('/api/users', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      console.log(err)
    })
})

// get one user //
app.get("/api/users/:username", (req, res) => {
  User.findOne({username: req.params.username}).then(function(user){
    res.json(user)
    });
  });

// create user //
app.post("/api/users", (req, res) => {
  User.create(req.body).then(user => {
    console.log("post api/users", req.body);
    console.log("user:", user)
    res.json(user)

  });
});

// update user //
app.put('/api/users/:username', (req, res) => {
  console.log(`Put method called ${req}`)
  User.findOneAndUpdate({username: req.params.username}, req.body, {new: true}).then(user => {
    res.json(user)
  })
})

// delete user //
app.delete("api/users/:username/delete", (req, res) => {
  User.findOneAndRemove({username: req.params.username})
    .then(() => {
      res.json("/users")
    })
})

// root homepage redirect
app.get('/', (req, res) => res.redirect('/api/users'))


// ZIPCODE FOR USERS ROUTES //

// get all users by zipcode //
app.get("/api/userszipcode/:zipcode", (req, res) => {
  User.find({zipcode: req.params.zipcode})
    .then((users) => {
      res.json(users)
    })
})
