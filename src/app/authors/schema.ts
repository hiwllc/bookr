import { gql } from "apollo-server";

export const typeDefs = gql`
  type Author {
    id: ID!
    name: String
  }

  type Query {
    authors: [Author]
    author(id: ID!): Author
  }

  input CreateAuthorInput {
    name: String
  }

  input UpdateAuthorInput {
    id: ID!
    name: String
  }

  type CreateAuthorPayload {
    author: Author
  }

  type UpdateAuthorPayload {
    author: Author
  }

  type DeleteAuthorPayload {
    author: ID!
  }

  type Mutation {
    createAuthor(input: CreateAuthorInput!): CreateAuthorPayload
    updateAuthor(input: UpdateAuthorInput!): UpdateAuthorPayload
    deleteAuthor(id: ID!): DeleteAuthorPayload
  }
`;
