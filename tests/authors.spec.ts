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

const QUERY_FETCH_AUTHOR = `
  query fetchAuthor($id: ID!) {
    author(id: $id) {
      id
      name
    }
  }
`;

type Author = {
  id: string;
  name: string;
};

type FetchAuthorsQuery = {
  authors?: Author[];
};

type FetchAuthorQuery = {
  author?: Author;
};

test("deve retornar uma lista de autores vazia", async () => {
  const { data } = await query<FetchAuthorsQuery>({
    query: QUERY_FETCH_AUTHORS,
  });
  expect(data?.authors).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: "Cornelia Funke" }),
      expect.objectContaining({ name: "Isaac Asimov" }),
    ])
  );
});

test("deve retornar um autor apenas", async () => {
  const { data } = await query<FetchAuthorQuery>({
    query: QUERY_FETCH_AUTHOR,
    variables: { id: "1" },
  });

  expect(data?.author).toMatchObject({ name: "Cornelia Funke" });
});
