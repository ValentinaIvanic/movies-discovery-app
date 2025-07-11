import styled from "styled-components";
import { useContext, useState } from "react";

import { AppContext } from "./Content";

const GenreBox = styled.div`
    font-size = 0.5rem;
    transition: color 0.2s;
    max-height: 32px;
    padding: 7px;
    text-transform: uppercase;
    cursor: pointer;
    color: ${props => props.activebutton? "black" : "white"};
    background: ${props => props.activebutton? "yellow" : "black"};

    &:hover {
        background: yellow;
        color: black;
    }


`;

export default function Genre({id, genre_name}) {
    const {genres, setGenres, fetchPageNum, setFetchPageNum} = useContext(AppContext);
    const [active, setActive] = useState(false);

    const handleClick = () => {
        if (active) {
            const pom = genres.filter((genre_id) => genre_id !== id);
            setGenres(pom);
        } else {
            setGenres(prev => [...prev, id])
        }
        setActive(prev => !prev);
    }

    return (
        <GenreBox activebutton={active} onClick={handleClick}>{genre_name}</GenreBox>
    );

};