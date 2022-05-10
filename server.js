const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const connectDB = require('./DB/connection');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerOutput.json');

connectDB();

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var options = {
  explorer: true
};

// For parsing application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`${port}`);
});

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
  .use('/index', require('./routes/index'))
  .use('/contacts', require('./routes/contacts'));

app.listen(port, () => {
  console.log(`this is running on port ${port}`);
});
