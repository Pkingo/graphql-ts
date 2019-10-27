import express from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./_schema/schema";

const app = express();
const PORT = 4000; // default port to listen

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
