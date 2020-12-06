import authors from "./data/authors";

type Args = {
  id: string;
};

export const resolvers = {
  Query: {
    authors: () => authors,
    author: (_parent: any, args: Args) =>
      authors.find((author) => author.id === args.id),
  },
};
