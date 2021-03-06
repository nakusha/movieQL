import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
    Query:{
        movies:(_, {limit, rating}) => getMovies(limit, rating),
        movie:(_, { id }) => getMovie(id),
        suggestions:(_, {id}) => getSuggestions(id)
    }
};

export default resolvers
/*
import {people } from "./db";
import { getById, getMovieById, getMovies, addMovie, deleteMovie } from "./db";

const resolvers = {
    Query :{
        people: () => people,
        person: (_, {id}) => getById(id),
        movies: () => getMovies(),
        movie: (_, {id}) => getMovieById(id)
    },
    Mutation:{
        addMovie:(_,{name, score}) => addMovie(name, score),
        deleteMovie:(_, {id}) => deleteMovie(id)
    }
};

export default resolvers;
*/