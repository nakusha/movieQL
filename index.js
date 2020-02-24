import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs:"graphql/movieSchema.graphql",
    resolvers
});

server.start(() => console.log("GraphQL Server Running"))