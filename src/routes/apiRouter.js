const express = require("express");
const { auth } = require("firebase-admin");
const apiRouter = express.Router();

apiRouter.post("/auth/signup", (req, res) => {
  auth().createUser({
    email: req.body.email, 
    password: req.body.password,
    displayName: req.body.username,
  })
    .then((userRecord)=>{
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(userRecord)
      console.log('Successfully created new user:', userRecord.uid);
    })
    .catch((error)=>{
      console.log('Error creating new user:', error);
    });
});

apiRouter.post("/auth/login", (req, res) => {

  let uid = 'some-uid';
  auth().createCustomToken(uid)
    .then(function(customToken) {
      console.log(customToken)
      res.json(customToken)
    })
    .catch(function(error) {
      console.log('Error creating custom token:', error);
    });

});

module.exports = apiRouter;