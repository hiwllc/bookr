import { Database } from "../src/server";
import { connection } from "../src/database";

beforeAll(async () => {
  await Database();
});

afterAll(async () => {
  await connection.db.dropDatabase();
  await connection.close();
});
