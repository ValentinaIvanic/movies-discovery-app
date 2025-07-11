import SearchResultsList from "./SearchResultsList";
import API from "../api";

import { useState, useEffect } from "react";
import styled from "styled-components";


const SearchInput = styled.input`
    color: black;
    width: 20rem;

    &:focus {
        outline: 2px solid gray;
    }
`;

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState([]);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleSearch = (value) => {
        setSearchValue(value);
        if(timeoutId) clearTimeout(timeoutId);

        const newTimeout = setTimeout(() => {
            fetchResults(value);
        }, 100);

        setTimeoutId(newTimeout);
    };

    const fetchResults = async (value) => {
        try {
            const res = await API.get(
                "/search/multi",
                {params: {
                    query: value
                }}
            );
            setResults(res.data.results);
        } catch (err) {
            console.log(err);
        } 
    };

    return (
        <div>
        <SearchInput
            type="text"
            placeholder="Search content..."
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
        />
        {results.length > 0 && <SearchResultsList content={results}/> }
        </div>

    );
};