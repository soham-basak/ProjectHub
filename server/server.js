const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connetDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

//Connect to database
connetDB();

app.use(
  cors({
    origin: "*",
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
