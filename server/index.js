const express = require('express');
const cors = require('cors');
const router = require('./router');
const dbConnection = require('./models/index.js');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use(express.static(__dirname + '../client/build'));
app.get('*', function(req, res){
  res.sendFile(__dirname + '../client/build/index.html');
});

app.listen(PORT, console.log(`** Server running on port ${PORT} **`));
