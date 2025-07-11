import styled from "styled-components";
import FeaturedBox from "./FeaturedBox";
import LoadMoreButton from "./LoadMoreButton";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    gap: 1rem;
    padding: 10px 20px;
`;

export default function Featured({items}) {
    
    return (
        <Grid>
           { items?.map((item) =>
                <FeaturedBox 
                    key={item.id} 
                    img_path={`https://image.tmdb.org/t/p/original${item.poster_path}`} 
                    genre_ids={item.genre_ids[0]}
                    title={item.title ? item.title : item.name}
                />
            ) }
            <LoadMoreButton/>
        </Grid>
    );

};