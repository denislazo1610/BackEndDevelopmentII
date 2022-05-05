const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const connectDB = require('./DB/connection');

connectDB();

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// For parsing application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`Go to /contacts`);
});

app.use('/index', require('./routes/index')).use('/contacts', require('./routes/contacts'));

app.listen(port, () => {
  console.log(`this is running on port ${port}`);
});
