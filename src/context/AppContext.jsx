import { createContext } from "react";

export const AppContext = createContext({
    genres:[], 
    setGenres:()=>{}, 
    fetchPageNum:[], 
    setFetchPageNum:()=>{},
    content:[],
    setContent:()=>{},
});

