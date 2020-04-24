const { mergeSchemas } = require('apollo-server');
const coronavirusSchema = require('./datasources/coronavirus/schema');

module.exports = mergeSchemas({
  schemas: [coronavirusSchema /** You can add multiple schemas here */],
});
