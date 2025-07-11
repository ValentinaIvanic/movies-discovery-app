import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

const Button = styled.button`
    color: black;
    background-color: yellow;
    font-size: 1rem;
    transition 0.4s;
    align-self: center;
`;

export default function LoadMoreButton() {
    const {fetchPageNum, setFetchPageNum} = useContext(AppContext);

    return (
        <Button onClick={() => {setFetchPageNum(prev => prev + 1); console.log(fetchPageNum)}}>Load More</Button>
    );

};
