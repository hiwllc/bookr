const authors = [{ id: "1", name: "Cornelia Funke" }];

export const resolvers = {
  Query: {
    authors: () => authors,
  },
};
