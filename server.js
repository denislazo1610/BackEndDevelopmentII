const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const connectDB = require('./DB/connection');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerOutput.json');
var createError = require('http-errors');

connectDB();

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var options = {
  explorer: true
};

// For parsing application/json
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
//   );
//   res.setHeader('Content-Type', 'application/json');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });

app.get('/', (req, res) => {
  res.send(`${port}`);
});

app
  .use(bodyParser.json())
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
  .use('/', require('./routes/index'));

app.use((err, req, res, next) => {
  res.status(err.status);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

// .use('/contacts', require('./routes/contacts'));

app.listen(port, () => {
  console.log(`this is running on port ${port}`);
});
