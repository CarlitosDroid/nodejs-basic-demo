'use strict'

const express = require('express');

// Constants
const PORT = 80;

// App
const app = express();
app.get('/users', function (req, res) {
  res.send('Este es un servicio GET muy bien ya sabes backend!! xD \n');
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
