import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    # release year
    release: Int
    author: ID
  }

  type Query {
    greet: String
    book: Book
  }
`

const resolvers = {
  Query: {
    greet: () => `Hello World!`,
    book: () => ({
      title: 'Fundação',
      author: 'Isaac Asimov'
    })
  }
}

const app = new ApolloServer({
  typeDefs,
  resolvers,
})

app.listen(4000).then(() => {
  console.log(`running at port 4000`)
})
