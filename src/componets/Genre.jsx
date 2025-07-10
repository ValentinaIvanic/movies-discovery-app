import styled from "styled-components";

const GenreBox = styled.div`
    font-size = 0.5rem;
    transition: color 0.2s;
    max-height: 32px;
    color: white;
    padding: 7px;
    text-transform: uppercase;

    &:hover {
        background: yellow;
        color: black;
    }
`;

export default function Genre({genre_name}) {

    return (
        <GenreBox>{genre_name}</GenreBox>
    );

};