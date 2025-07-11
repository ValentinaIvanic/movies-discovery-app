import styled from "styled-components";
import GenreBar from "./GenreBar";
import SidePoster from "./SidePoster";
import About from "./About";
import API from "../api";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
    max-width: 15%;
    min-width: min-content;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: black;
    height: stretch;
`;


export default function SideBar({category}) {
    const [poster, setPoster] = useState();

    useEffect(() => {
        const url = category === "movie" ? "movie/upcoming" : "tv/airing_today"
        try {
            const getSidePoster = async () => {
                const res = await API.get(`/${url}`)
                const poster_data = res.data.results[0];
                setPoster(poster_data);
                console.log(poster_data);
            }
            getSidePoster();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <Wrapper>
            <GenreBar category={category}/>
            {poster && <SidePoster category={category} poster_path={poster.poster_path}/>}
            {poster && <About overview={poster.overview} title={poster.title ? poster.title : poster.name}/>}
        </Wrapper>
    );

};