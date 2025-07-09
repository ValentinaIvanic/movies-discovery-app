import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    height: max-content;
`;

const Genre = styled.h6`
    font-size: x-small;
    text-align: center;
    height: max-content;
    margin: 3px;    
`;

const Title = styled.h4`
    color: white;
    font-size: small;
    display: flex;
    text-align: center;
    justify-content: center;
    text-transform: capitalize;
    margin: 2px;

    &:hover {
        color: yellow;

    }
`;

export default function FeaturedBox({img_path, genre_ids, title}) {

    return(
        <Box>
            <img src={`${img_path}`} alt="Slika" />
            <Genre>{genre_ids}</Genre>
            <Title>{title}</Title>
        </Box>
    );
};