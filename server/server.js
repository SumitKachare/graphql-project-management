const express = require("express");
const dotenv = require("dotenv");

const typeDefs = require("./typedefs/typedefs");
const resolvers = require("./resolvers/resolvers");

const { ApolloServer } = require("apollo-server-express");
const { connectDB } = require("./config/db.config");

dotenv.config();

const PORT =  process.env.PORT || 3000

const startServer = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  //  start apollo server
  await apolloServer.start();

  // pass app instance to apollo server
  apolloServer.applyMiddleware({ app });

  // run express middleware
  app.use("/", (req, res) => {
    res.send("Welcome to graphql Crud");
  });

  connectDB()
    .then(() => {
      // run express server
      app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.log("DB connection error", error.message);
    });
};

startServer();
