import styled from "styled-components";

const Box = styled.div`
    background-image: url(${(props) => props.image});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

`;

const Title = styled.h4`
    color: white;
    font-size: medium;
    height: max-content;
    text-transform: capitalize;
`;

const Overview = styled.h6`
    color: yellow;
    text-transform: capitalize;
    font-size: x-small;
    height: max-content;
    margin: 5px;
    text-align: center;
`;


export default function PreviewBox({backdrop_path, title, overview}) {

    return (
        <Box image={`https://image.tmdb.org/t/p/original${backdrop_path}`}>
            <Title>{title}</Title>
            <Overview>{overview}</Overview>
        </Box>
    );

};