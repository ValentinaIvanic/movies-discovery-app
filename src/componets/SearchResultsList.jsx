import styled from "styled-components";

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 5px;
    background: white;
    color: black;
    position: absolute;
    padding: 10px;
    right: 10px;
    width: 20rem;


`;

export default function SearchResultsList({content}) {
    const limited_content = content.slice(0, 11);
    
    return (
        <List>
            {limited_content.map((item) => (
                <li>{item.title ? item.title : item.name}</li>
            ))}
        </List>
    );
};
