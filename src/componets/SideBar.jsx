import styled  from "styled-components";

const SideBarContainer = styled.div`
    max-width: 20%;
    min-width: max-content;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    background: black;
    gap: 5px;

`;

const Genre = styled.div`
    font-size = 0.5rem;
    transition: color 0.2s;
    max-height: 32px;
    color: white;
    padding: 7px;

    &:hover {
        background: yellow;
        color: black;
    }
`;

const About = styled.div`

`;


export default function SideBar() {
    const genres = ["COMEDY", "DRAMA", "ACTION", "FANTASTIC", "ROMANTIC", 
                    "ANIME", "ADVENTURE", "THRILLER", "MYSTIC", "SCIENCE", 
                    "MILITARY", "HISTORICAL", "WESTERN", "MUSICAL", "FAMILY",
                    "SPORT"]
    

    return (
        <SideBarContainer>
            {genres.map(
                (genre) => <Genre key={genre}>{genre}</Genre>
            )}
        </SideBarContainer>
    );
}