const path = require('path');
const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');

const resolvers = require('./resolvers');

const typeDefs = importSchema(path.join(__dirname, 'schema.graphql'));

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
