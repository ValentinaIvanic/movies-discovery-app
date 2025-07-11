import styled  from "styled-components";
import Genre from "./Genre";
import API from "../api";
import { useEffect, useState } from "react";

const GenreList = styled.div`
    min-width: max-content;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    gap: 5px;

`;

export default function GenreBar({category}) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function fetchGenres() {
            try {
                const response = await API.get(`/genre/${category}/list`);
                setGenres(response.data.genres)
            } catch (err) {
                console.log(err);
            }
        }

        fetchGenres();
    }, [])
    

    return (
        <GenreList>
            {genres.map(
                (genre) => <Genre key={genre.id} id= {genre.id} genre_name={genre.name}/>
            )}
        </GenreList>
    );
}