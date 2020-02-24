import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json"

export const getMovies = (limit, rating) => {
    const REQUEST_URL = API_URL;
    if (limit > 0){
        REQUEST_URL += `limit=${limit}`
    }

    if (rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`
    }

    return fetch(`${REQUEST_URL}`).then(res => res.json()).then(json => json.data.movies)
    // return fetch(`${API_URL}`).then(res => res.json()).then(json => json.data.movies)
};
/*
export let people = [
    {
        id: 0,
        name: "yeonsu",
        age: 36,
        gender: "male",
        job: "S/W"
    },
    {
        id: 1,
        name: "suyeon",
        age: 36,
        gender: "female",
        job: "S/W Programmer"
    },
    {
        id: 2,
        name: "222",
        age: 24,
        gender: "male",
        job: "44"
    },
    {
        id: 3,
        name: "5151",
        age: 36,
        gender: "male",
        job: "S/W 1231"
    },
    {
        id: 4,
        name: "767",
        age: 36,
        gender: "male",
        job: "S/W 124124"
    }
]

export let movies = [
    {
        id:0,
        name:"Lord of Rings",
        score: 9
    },
    {
        id:1,
        name:"Avengers",
        score: 9.5
    },
    {
        id:2,
        name:"Iron Man",
        score: 7
    },
    {
        id:3,
        name:"Super Man",
        score: 8.4
    },
    {
        id:4,
        name:"Ragnarok",
        score: 7.5
    },
    {
        id:5,
        name:"Blade II",
        score: 7.2
    },
    {
        id:6,
        name:"OngBack",
        score: 4
    },
    {
        id:7,
        name:"Star Wars",
        score: 9.1
    },
    {
        id:8,
        name:"Perasite",
        score: 10
    },
    {
        id:9,
        name:"Last Soldier",
        score: 3.2
    }
]

export const getMovies = () => movies;

export const getMovieById = id => {
    const selectedMovie = movies.filter(movie => movie.id === id)
    return selectedMovie[0];
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id)
    if (movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const getById = id => {
    const filteredId = people.filter(person => person.id === id);
    return filteredId[0];
}
*/