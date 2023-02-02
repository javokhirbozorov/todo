require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();



// app.use(cors({
//   origin:'*', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }))

//! never forget you get killed otherwise

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //todo it runs the project from the build folder
// if(process.env.NODE_ENV === "production"){
//   app.use(express.static('client/build'))
// }




const mainRoute = require('./src/routes/mainRoute');

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'https://javo-todo.onrender.com', 'https://javo-todo.onrender.com/tick'],
}));

const PORT = process.env.PORT || 3001;
app.use('/', mainRoute);

app.listen(PORT, ()=>{
  console.log(`Server running on port: ${PORT}`);
});

