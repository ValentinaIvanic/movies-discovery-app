import axios from "axios"

const tmdbToken = process.env.REACT_APP_TMDB_TOKEN;

const API = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${tmdbToken}`,
    }
})

export default API;