import styled from "styled-components";
import Search from "./Search";

const Wrapper = styled.div`
    width: 100%;
    margin: 0;
    background: black;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 5px 20px;
`;

export default function SearchBar() {
    return (
        <Wrapper>
            <Search/>
        </Wrapper>

    );

};