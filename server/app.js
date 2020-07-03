// Import all dependencies & middleware here
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import {
   userController,
} from './controller';

// Init an Express App. This later starts a server and put all dependencies into your project to use
const app = express();

// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// use all controllers(APIs) here
app.use('/', userController);
// Uncomment and modify the route if you want to use any controllers
//app.use('/abc', abcController);
//app.use('/xyz', xyzController);



// Start Anything here
app.listen(8080, () => {
   console.log('Started successfully server at port 8080');
   mongoose.connect('mongodb://localhost/test').then(() => {
      console.log(`Conneted to mongoDB at port 27017`);
   });
});
