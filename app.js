require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

//! never forget you get killed otherwise

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //todo it runs the project from the build folder
// if(process.env.NODE_ENV === "production"){
//   app.use(express.static('client/build'))
// }



app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3001/tick'],
}));
const mainRoute = require('./src/routes/mainRoute');

const PORT = process.env.PORT || 5000;
app.use('/', mainRoute);

app.listen(PORT);