import styled from "styled-components";

const MusicCardContainer = styled.div`
    cursor: pointer;
    display: flex;
    min-width: 370px;
    max-width: 370px;

    > figure {
        width: 56px;
        height: 56px;
        gap: 1rem;
        display: flex;
        align-items: center;
    }

    > figure > figcaption {
        display: flex;
        height: 100%;
        min-width: 200px;
        flex-direction: column;
        justify-content: space-around;
        max-width: 25ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
`

const DivImage = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

`
const DivPlay = styled.div`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 56px;
    height: 56px;

    background-color: rgba(0,0,0,0.8);
`

const DivModal = styled.div`
    position: relative;

    .MuiPaper-root {
        z-index: 2;
    }
`

export { MusicCardContainer, DivImage, DivPlay, DivModal }