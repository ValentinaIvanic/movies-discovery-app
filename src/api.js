import axios from "axios"

const API = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmJmNzM4YTZhMjcxMTk4MDBjNzM4MjZlNTRiNWM0YyIsIm5iZiI6MTc1MTg5MzU2Ny43OTAwMDAyLCJzdWIiOiI2ODZiYzYzZjc4N2I4ZTA4MjllZDViODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QAM_fe-lW8p_jmVUwXVlP5q2qD6QReG6n7Y2QXaifHA',
    }
})

export default API;