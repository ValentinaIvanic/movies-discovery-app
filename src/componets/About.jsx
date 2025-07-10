import styled from "styled-components";

const Text = styled.h6`
    color: #C0C0C0;
    font-size: x-small;
    height: max-content;
    text-wrap: wrap;
    padding; 6px;
    margin: 0px;
`;

const Title = styled.h4`
    color: white;
    font-size: small;
    margin: 0px;
    padding: 5px;

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export default function About({overview, title}) {
    return (
        <Wrapper>
            <Title>ABOUT</Title>
            <Text>{title.toUpperCase()}: {overview}</Text>
        </Wrapper>
    );

};