const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema');
const CoronavirusAPI = require('./datasources/coronavirus/coronavirusAPI');

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    coronavirusAPI: new CoronavirusAPI(),
  }),
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
