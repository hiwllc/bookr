import { create, update, destroy, load, loader } from "./datasource";
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

export const resolvers = {
  Query: {
    authors: (_parent: any, args: any) => loader(args),
    author: (_parent: any, args: Args) => load({ id: args.id }),
  },

  Mutation: {
    createAuthor: (_parent: any, args: AuthorInput) => {
      return create(args.input);
    },

    updateAuthor: (_parent: any, args: InputWithID) => {
      return update(args.input);
    },

    deleteAuthor: (_parent: any, args: Args) => {
      return destroy(args.id);
    },
  },
};
