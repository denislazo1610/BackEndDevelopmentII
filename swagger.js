const swaggerAutogen = require('swagger-autogen')();
const port = process.env.PORT || 3000;

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: `https://backendcse.herokuapp.com`,
  schemes: ['https']
};

const outputFile = './swaggerOutput.json';
const endpointsFiles = ['./routes/contacts.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
