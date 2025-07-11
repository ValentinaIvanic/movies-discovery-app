import styled from "styled-components";
import FeaturedGrid from "../componets/Featured";
import API from "../api";
import SideBar from "./SideBar";

import { useState, useEffect, createContext } from "react";

export const GenresContext = createContext();

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  height: 100%;
`;

export default function Content({category}) {
    const [content, setContent] = useState([]);
    const [genres, setGenres] = useState([]);

    const getData = async () => {
        try {
            const res = await API.get(
                    `/discover/${category}`, 
                    {params: {
                        with_genres: genres,
                        include_video: 'false', 
                        sort_by: 'popularity.desc',
                    }}
                );
            console.log(res.data.results);
            const data = res.data.results
            setContent(data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData();
    }, [genres]);

    return (
        <Wrapper>
            <GenresContext value={{genres, setGenres}}>
                <SideBar category={category}/>
                <FeaturedGrid
                    items={content}
                />
            </GenresContext>
        </Wrapper>
    );

};