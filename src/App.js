import NavBar from "./componets/NavBar";
import styled from "styled-components";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies"

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #101010;
`;


function App() {
  return (
    <Page>
      <NavBar/>
      <Movies/>
    </Page>

  );
}

export default App;