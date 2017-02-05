'use strict'

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Este es un servicio GET muy bien ya sabes backend!! xD \n');
});

app.get('/windows', function (req, res) {
  res.send('windows \n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
