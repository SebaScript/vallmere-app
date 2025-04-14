const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.listen(8080, () => {
  console.log('Servidor frontend corriendo en http://localhost:8080');
});