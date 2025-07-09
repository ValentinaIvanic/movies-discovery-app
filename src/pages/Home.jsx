import styled from "styled-components";
import Preview from "../componets/Preview";
import ContentGrid from "../componets/ContentGrid";
import API from "../api";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Home() {
    const [content, setContent] = useState([]);

    const getStartData = async () => {
        try {
            const res = await API.get(
                    "/discover/movie", 
                    {params: { 
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
        getStartData();
    }, []);

    return(
        <Wrapper> 
            <Preview/>
            <ContentGrid items={content}/>
        </Wrapper>

    );


};