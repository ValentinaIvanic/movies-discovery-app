import styled from "styled-components";
import Preview from "../componets/Preview";
import Featured from "../componets/Featured";
import API from "../api";
import { AppContext } from "../context/AppContext";

import { useState, useEffect, useRef } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 20px;
`;

export default function Home() {
    const [content, setContent] = useState([]);
    const [fetchPageNum, setFetchPageNum] = useState(1);
    const firstRender = useRef(true);

    const getData = async () => {
        try {
            const res = await API.get(
                    "/discover/movie", 
                    {params: { 
                        page: fetchPageNum,
                        include_video: 'false', 
                        sort_by: 'popularity.desc',
                    }}
                );
            setContent(prev => [...prev, ...res.data.results]);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (!firstRender.current) {
            getData();
        } else {
            firstRender.current = false;
        }
    }, [fetchPageNum]);

    return(
        <Wrapper>
            <AppContext value={{fetchPageNum, setFetchPageNum, content}}>
                <Preview/>
                <Featured/>
            </AppContext>
        </Wrapper>

    );
};