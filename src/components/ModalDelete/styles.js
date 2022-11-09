import styled from "styled-components";

const ModalDeleteContainer = styled.div`  
    display: flex;
    flex-direction: column;

    width: 90%;
    max-width: 220px;
    gap: 2rem;

    padding: 1.5rem;

    border-radius: 4px;

    background-color: var(--grey-1);

    box-sizing: border-box;

    h1 {
        text-align: center;
        color: var(--grey-3)
    }

    .no {
        color: var(--grey-2)
    }

    > div {
        display: flex;
        justify-content: space-between;
    }

`

const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0,0,0,0.8);

    position: absolute;
    top: 0px;
    left: 0px;

    width: 100vw;
    height: 100vh;

    z-index: 10;
`

export { ModalDeleteContainer, ModalContainer }