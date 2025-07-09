import styled from "styled-components";
import PreviewBox from "./PreviewBox";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 100%;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem;
`;

export default function Preview({firstItem, otherItems}) {

    return (
        <Wrapper>
            <Grid>
                { otherItems?.map((item) =>
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