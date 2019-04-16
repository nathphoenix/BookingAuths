const express = require('express');
// import User from "../models/User";
const UserReg = require('../models/UserReg');
const sendConfirmationEmail = require('../mailer');
const router = express.Router();
const parseErrors = require('../utils/parseErrors');

//route get api/auth
//desc get all items
//@access public

router.get('/', (req, res ) =>{
    UserReg.find()
    .sort({date:-1})
    .then(user => res.json(user));
});

router.delete('/:id', (req, res) => {
    UserReg.findById(req.params.id)
      .then(user => user.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

router.post("/", (req, res) => {
  const {name, address, email, password } = req.body.user;
  const user = new UserReg({ name, address, email });
  user.setPassword(password);     // we define the passowrd here as we cant include it because it is hashed
  // user.save().catch(err => res.json({err}));
  user.setConfirmationToken();
  user.save()
  .then(user =>{
    sendConfirmationEmail(user);
    res.json({ user: user.toAuthJSON() })})
  .catch(err =>res.status(400).json({errors: parseErrors(err.errors) }));
});





module.exports = router;
