import "dotenv/config";
import { ApolloServer } from "apollo-server";
import { connect as DatabaseConnect } from "./database";
import { dataSources } from "./datasources";
import { AuthorsTypes, AuthorsResolvers } from "./app/authors";

const typeDefs = [AuthorsTypes.typeDefs];

const resolvers = {
  ...AuthorsResolvers.resolvers,
};

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

export const Database = DatabaseConnect;

export async function Start() {
  await DatabaseConnect();
  server.listen(process.env.PORT);
}
