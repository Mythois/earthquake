import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './models/typeDefs.js'
import resolvers from './resolvers/resolvers.js'


/**
 * ABOUT THIS FILE
 * This is the main backend file. 
 * Here the backend server is initialised.
 */

// Create new server instance
const server = new ApolloServer({
  typeDefs, // GraphQL schema
  resolvers,
})

// Start standalone server
startStandaloneServer(server, {
  listen: { port: 4000 },
})
  .then(({ url }) => {
    console.log(`Server is ready at ${url}`)
  })
  .catch((error) => {
    console.log(error.message)
  })
