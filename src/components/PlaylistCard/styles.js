import styled from "styled-components"

const PlaylistCardContainer = styled.div`
    position: relative;
    overflow: hidden;

    width: 112px;
    height: 112px;

    .trash{
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
`

const DivMoreOptions = styled.div`
    cursor: pointer;
    display: ${({isShown}) => isShown ? "flex" : "none" };
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: rgba(0,0,0,0.5);

    position: absolute;
    top: 0px;


`

const Gap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`


export { PlaylistCardContainer, DivMoreOptions, Gap }