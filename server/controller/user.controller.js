import express from 'express';
import sha256 from 'sha256';
const userController = express.Router();


import {
 User
} from '../database/models';

/**
 * GET/
 * retrieve and display all Users in the User Model
 */
userController.get('/', (req, res) => {
   User.find({}, (err, result) => {
      res.status(200).json({
         data: result,
      })
   })
});
/**
 * POST/
 * Add a new User to your database
 */
userController.post('/add-user', (req, res) => {
   const { email, password } = req.body;

   const data = {
      email,
      hashedPassword: sha256(password)
   }
const newUser = new User(data);
newUser
      .save()
      .then(data => {
         res.status(200).send(data);
      })
      .catch(err => {
         res.status(400).send("unable to save to database");
      });
});

export default userController;
