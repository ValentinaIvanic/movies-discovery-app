import NavBar from "./componets/NavBar";
import styled from "styled-components";
import SideBar from "./componets/SideBar";
import ContentGrid from "./componets/ContentList";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  height: 100%;
`;

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
      <MainDiv>
        <SideBar/>
        <ContentGrid/>
      </MainDiv>
    </Page>

  );
}

export default App;
