'use strict'

const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/users', function (req, res) {
  res.send('Este es un servicio GET muy bien ya sabes backend!! xD \n');
});

<<<<<<< HEAD
app.get('/windows', function (req, res) {
  res.send('windows \n');
=======
app.get('/animals', function (req, res) {
  res.send('Este es un servicio animals!! xD \n');
>>>>>>> 4efbe433ae4311b4b8e024e3a57242e0906d6a5d
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
