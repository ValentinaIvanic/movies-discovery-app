import styled from "styled-components";

const Box = styled.div`

    background: 
        linear-gradient(0deg, yellow, transparent),
        url(${(props) => props.image});

    background-size: cover;
    

    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    min-height: 18rem;
    max-height: 18rem;
    height: 20%;
    padding: 5px;
`;

const Title = styled.h4`
    color: black;
    font-size: medium;
    text-transform: uppercase;
    margin: 0px;
    padding: 2px;
`;

export default function SidePoster({category, poster_path}) {
    return (
        <Box image={`https://image.tmdb.org/t/p/original${poster_path}`}>
            <Title>{category === "movie" ? "UPCOMING" : "AIRING TODAY"}</Title>
        </Box>
    );

};