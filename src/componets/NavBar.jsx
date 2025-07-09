import styled from "styled-components"
import NavLink from "./NavLink";

const StyledNav = styled.nav`
    width: 100%;
    min-height: 4rem;
    height: 5rem;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem; 
    box-sizing: border-box;
    margin: 0;

`;

const Logo = styled.div`
    color: yellow;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;

    display: flex;
    align-items: center;
    height: 100%;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 32px;
    align-items: center
    height: 100%;
`;


export default function NavBar(){
    return (
        <StyledNav>
            <Logo>MOVIES ONLINE</Logo>
            <NavLinks>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/">Movies</NavLink>
                <NavLink href="/">Tv-shows</NavLink>
            </NavLinks>

        </StyledNav>

    );

}
