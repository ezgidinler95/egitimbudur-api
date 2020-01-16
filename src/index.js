const express = require("express");
import bodyParser from 'body-parser';
import AuthRouter from './routes';
//import mongoose from 'mongoose;'

var app = express();

//mongoose.connect('mongodb://localhost/egitim', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

AuthRouter(app);

app.get('/', (req, res) => {
  res.send('merhaba express hhh')
});

app.listen(3300, () => {
  console.log("ÇALIŞTI...")
});