import styled from "styled-components";
import Featured from "../componets/Featured";
import API from "../api";
import SideBar from "./SideBar";
import { AppContext } from "../context/AppContext";

import { useState, useEffect, useRef } from "react";


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
    const [fetchPageNum, setFetchPageNum] = useState(1);
    const [nextContent, setNextContent] = useState([]);
    const firstRender = useRef(true);

    const getStartData = async (pageNum) => {
        try {
            const res = await API.get(
                    `/discover/${category}`, 
                    {params: {
                        page: pageNum,
                        with_genres: genres,
                        include_video: 'false', 
                        sort_by: 'popularity.desc',
                    }}
                );
            setContent(res.data.results);
        } catch (err) {
            console.log(err)
        }
    }

    const getData = async (pageNum) => {
        try {
            const res = await API.get(
                    `/discover/${category}`, 
                    {params: {
                        page: pageNum,
                        with_genres: genres,
                        include_video: 'false', 
                        sort_by: 'popularity.desc',
                    }}
                );
            setContent(prev => [...prev, ...nextContent]);
            setNextContent(res.data.results);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(!firstRender.current) {
            getData(fetchPageNum);
        }    

    }, [fetchPageNum]);

    useEffect(() => {
        setContent([]);
        setNextContent([]);
        getStartData(1);

        setFetchPageNum(2);
        firstRender.current = false;

    }, [genres])

    return (
        <Wrapper>
            <AppContext value={{genres, setGenres, fetchPageNum, setFetchPageNum, content}}>
                <SideBar category={category}/>
                <Featured/>
            </AppContext>
        </Wrapper>
    );

};