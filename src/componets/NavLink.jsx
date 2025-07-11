import styled from "styled-components"
import { useContext } from "react";
import { RoutingContext } from "../context/RoutingContext";

const StyledLink = styled.button`
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: 0.4s;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0.5rem;
    background-color: black;
    border: 0;

    &:hover {
        color: yellow;
        background: grey;
    }
`;

export default function NavLink({currentPage, children}) {
    const page = useContext(RoutingContext);

    return (
        <StyledLink onClick={e => page.setCurrentPage(currentPage)}>{children}</StyledLink>
    );

}