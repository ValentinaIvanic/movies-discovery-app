import styled from "styled-components";
import PreviewBox from "./PreviewBox";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 100%;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 50% 25% 25%;
    gap: 2rem;
`;

export default function Preview() {
    const {content} = useContext(AppContext);
    const firstFive = content.slice(0, 4);

    return (
        <Wrapper>
            <Grid>
                { firstFive?.map((item) =>
                        <PreviewBox
                            key={item.id}
                            backdrop_path={item.backdrop_path}
                            title={item.title}
                            overview={item.overview}
                        />
                    )}
            </Grid>
        </Wrapper>
    );

};