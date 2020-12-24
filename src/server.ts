import "dotenv/config";
import { ApolloServer } from "apollo-server";
import { connect as DatabaseConnect } from "./database";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const Database = DatabaseConnect;

export async function Start() {
  await DatabaseConnect();
  server.listen(process.env.PORT);
}
