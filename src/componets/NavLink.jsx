import styled from "styled-components"

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0.5rem;

    &:hover {
        color: yellow;
        background: grey;
    }
`;

export default function NavLink({href, children}) {
    return (
        <StyledLink href={href}>{children}</StyledLink>

    );

}