import styled from "styled-components";
import { useState, useEffect, use } from "react";
import API from "../api";

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:white
`;

const ContentGenre = styled.h6`
    font-size: x-small;
`;

const ContentTitle = styled.h4`
    color: white;
    font-size: medium;
    text-transform: capitalize;

    &:hover: {
        color: yellow;

    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
`;


export default function ContentGrid() {
    const [content, setContent] = useState([]);

    const getStartData = async () => {
        try {
            const res = await API.get("/discover/movie", {params: { include_video: 'false', sort_by: 'popularity.desc'}});
            console.log(res.data.results);
            const data = res.data.results
            setContent(data);
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getStartData();
    }, []);

    return (
        <Grid>
            { content ? (
            content.map((item) =>
                <ContentBox key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="Slika" />
                    <ContentGenre>{item.genre_ids}</ContentGenre>
                    <ContentTitle>{item.title}</ContentTitle>
                </ContentBox>
            )) : (
            <div></div>
            )}

        </Grid>

    );

};