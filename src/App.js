import NavBar from "./componets/NavBar";
import styled from "styled-components";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies"
import SearchBar from "./componets/SearchBar";
import { RoutingContext } from "./context/RoutingContext";

import { useState } from "react";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #101010;
`;


function App() {
  const [currentPage, setCurrentPage] = useState("/home");



    
  return (
    <Page>
      <SearchBar/>
      <RoutingContext value={{currentPage, setCurrentPage}}>
        <NavBar/>
        {currentPage === "/home" && <Home/>}
        {currentPage === "/movies" && <Movies/>}
        {currentPage === "/tv_shows" && <TvShows/>}
      </RoutingContext>
    </Page>
  );
}

export default App;