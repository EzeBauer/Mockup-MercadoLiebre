const express = require('express');
const app = express();
const port= 3080
const path= require ('path')

app.listen(port, () =>
  console.log("Servidor corriendo en puerto http://localhost:" + port)
);

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "./views/home.html")))

app.use(express.static('public'));