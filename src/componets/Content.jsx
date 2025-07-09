import styled from "styled-components";
import SideBar from "../componets/SideBar";
import FeaturedGrid from "../componets/Featured";
import API from "../api";

import { useState, useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  height: 100%;
`;

export default function Content({category, genres}) {
    const [content, setContent] = useState([]);

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
    }, []);

    return (
        <Wrapper>
            <SideBar/>
            <FeaturedGrid
                items={content}
            />
        </Wrapper>
    );

};