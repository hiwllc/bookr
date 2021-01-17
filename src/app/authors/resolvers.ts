import { Resolvers } from "../../types";
import { Author } from "./model";

type Args = {
  id: string;
};

type AuthorInput = {
  input: Author;
};

type InputWithID = {
  input: { id: string } & Author;
};

export const resolvers: Resolvers<Author> = {
  Query: {
    authors: (_parent, args, { dataSources }) => {
      return dataSources.Authors.loader(args);
    },

    author: (_parent, { id }: Args, { dataSources }) => {
      return dataSources.Authors.load({ id });
    },
  },

  Mutation: {
    createAuthor: (_parent, args: AuthorInput, { dataSources }) => {
      return dataSources.Authors.create(args.input);
    },

    updateAuthor: (_parent, args: InputWithID, { dataSources }) => {
      return dataSources.Authors.update(args.input);
    },

    deleteAuthor: (_parent, args: Args, { dataSources }) => {
      return dataSources.Authors.destroy(args.id);
    },
  },
};
