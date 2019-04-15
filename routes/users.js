const express = require('express');
// import User from "../models/User";
const UserReg = require('../models/UserReg');
// const sendConfirmationEmail = require('../mailer');
const router = express.Router();
const parseErrors = require('../utils/parseErrors');

//route get api/auth
//desc get all items
//@access public

router.get('/', (req, res ) =>{
    UserReg.find()
    .sort({date:-1})
    .then(user => res.json(user));
})

// router.delete('/:id', (req, res) => {
//     User.findById(req.params.id)
//       .then(user => user.remove().then(() => res.json({ success: true })))
//       .catch(err => res.status(404).json({ success: false }));
//   });

  // router.post('/', (req, res ) =>{
  //   const { name, address, email, password  } = req.body.user;
  //   const user = new User({ name, address, email });   // we do not want to pass password
  //   }
  

// module.exports = router;

// const router = express.Router();

router.post("/", (req, res) => {
  const {name, address, email, password } = req.body.user;
  const user = new UserReg({ name, address, email });
  user.setPassword(password);     // we define the passowrd here as we cant include it because it is hashed
  // user.save().catch(err => res.json({err}));
  // user.setConfirmationToken();
  user.save()
  .then(user => res.json({ user: user.toAuthJSON() }))
  .catch(err =>res.status(400).json({errors: parseErrors(err.errors) }));
  // .catch(err => {
  //   res.status(400).json("Unable to save the item to the database!");
  // });
  // .then(user =>{ 
  //   sendConfirmationEmail(user);
  //   res.json({user: user.toAuthJSON ()})})  // IF everything is ok it will pass the details in the form of json and save to database
  //   .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

//   user.setConfirmationToken();
//   user
//     .save()
//     .then(userRecord => {
//       sendConfirmationEmail(userRecord);
//       res.json({ user: userRecord.toAuthJSON() });
//     })
//     .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
// });



module.exports = router;
