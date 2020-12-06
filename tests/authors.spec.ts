import { createTestClient } from "apollo-server-testing";
import { server } from "../src/server";

const { query } = createTestClient(server);

const QUERY_FETCH_AUTHORS = `
  query fetchAuthors {
    authors {
      id
      name
    }
  }
`;

type FetchAuthorsQuery = {
  authors?: Array<{
    id: string;
    name: string;
  }>;
};

test("deve retornar uma lista de autores vazia", async () => {
  const { data } = await query<FetchAuthorsQuery>({
    query: QUERY_FETCH_AUTHORS,
  });
  expect(data?.authors).toStrictEqual([]);
});
