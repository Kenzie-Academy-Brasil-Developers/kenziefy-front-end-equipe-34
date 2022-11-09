import styled from "styled-components";

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;

    input {
        border-bottom: 3px solid #1976d2;
    }

    label {
        color: white;
    }
`

const DivCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 90%;
    max-width: 1000px;

    > h1 {
        padding: 2rem 0;
    }

    > div {
        display: flex;
        align-items: center;

        border-bottom: 1px solid var(--grey-2);
        padding: 0.5rem 0;

        width: 100%;
        justify-content: space-between;
    }
`

const MusicContainer = styled.ul`
    display: flex;  
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        width: 1px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--blue-1);
        border-radius: 20px;
        border: 4px solid var(--grey-3);
    }

    margin-top: 1rem;
    margin-bottom: 1rem;

    width: 100%;
    max-height: 300px;
    min-height: 289px;
`


export { MainContainer, MusicContainer, DivCenter }
