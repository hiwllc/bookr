import { createTestClient } from "apollo-server-testing";
import { Author } from "../src/model";
import { server } from "../src/server";

const { mutate, query } = createTestClient(server);

const MUTATION_CREATE_AUTHOR = `
  mutation createAuthor($author: CreateAuthorInput!) {
    createAuthor(input: $author) {
      author {
        id
        name
      }
    }
  }
`;

const MUTATION_UPDATE_AUTHOR = `
  mutation updateAuthor($author: UpdateAuthorInput!) {
    updateAuthor(input: $author) {
      author {
        name
      }
    }
  }
`;

const QUERY_FETCH_AUTHORS = `
  query fetchAuthors {
    authors {
      name
    }
  }
`;

const QUERY_FETCH_AUTHOR = `
  query fetchAuthor($id: ID!) {
    author(id: $id) {
      name
    }
  }
`;

const MUTATION_DELETE_AUTHOR = `
  mutation deleteAuthor($id: ID!) {
    deleteAuthor(id: $id) {
      author
    }
  }
`;

type CreateAuthorResult = {
  createAuthor?: {
    author: Author;
  };
};

type UpdateAuthorResult = {
  updateAuthor?: {
    author: Author;
  };
};

type FetchAuthorsResult = {
  authors?: Author[];
};

type FetchAuthorResult = {
  author?: Author;
};

type DeleteAuthorResult = {
  deleteAuthor?: {
    author: string;
  };
};

let authorId: string;

test("deve criar um autor e retornar os dados", async () => {
  const { data } = await mutate<
    CreateAuthorResult,
    { author: Pick<Author, "name"> }
  >({
    mutation: MUTATION_CREATE_AUTHOR,
    variables: { author: { name: "Cornelia Funke" } },
  });

  // aqui nós precisaremos do id nos próximos testes
  authorId = data?.createAuthor?.author.id as string;

  expect(data?.createAuthor?.author.name).toBe("Cornelia Funke");
});

test("deve retornar uma lista com os autores", async () => {
  const { data } = await query<FetchAuthorsResult>({
    query: QUERY_FETCH_AUTHORS,
  });

  expect(data?.authors).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: "Cornelia Funke" }),
    ])
  );
});

test("deve retornar um autor pelo id", async () => {
  const { data } = await query<FetchAuthorResult>({
    query: QUERY_FETCH_AUTHOR,
    variables: { id: authorId },
  });
  expect(data?.author).toMatchObject({ name: "Cornelia Funke" });
});

test("deve editar e retornar os dados de um autor", async () => {
  const { data } = await mutate<UpdateAuthorResult, { author: Author }>({
    mutation: MUTATION_UPDATE_AUTHOR,
    variables: { author: { id: authorId, name: "Douglas Adam" } },
  });

  expect(data?.updateAuthor?.author).toMatchObject({
    name: "Douglas Adam",
  });
});

test("deve excluir e retornar o id de um autor", async () => {
  const { data } = await mutate<DeleteAuthorResult, { id: string }>({
    mutation: MUTATION_DELETE_AUTHOR,
    variables: { id: authorId },
  });

  expect(data?.deleteAuthor?.author).toEqual(authorId);
});
