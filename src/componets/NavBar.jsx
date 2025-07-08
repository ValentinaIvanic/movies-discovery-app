import styled from "styled-components"

const StyledNav = styled.nav`
    width: 100%;
    min-height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    box-sizing: border-box;
    margin: 0;

`;

const Logo = styled.div`
    color: yellow;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 32px;
    align-items: center
    height: 100%;
`;

const StyledLinks = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1rem;
    position: relative;
    transition: color 0.2s;

    &:hover {
        color: yellow;
        background: grey;
    }
`;



export default function NavBar(){
    return (
        <StyledNav>
            <Logo>MOVIES ONLINE</Logo>
            <NavLinks>
                <StyledLinks href="/">Home</StyledLinks>
                <StyledLinks href="/">Movies</StyledLinks>
                <StyledLinks href="/">Tv-shows</StyledLinks>
            </NavLinks>

        </StyledNav>

    );

}
