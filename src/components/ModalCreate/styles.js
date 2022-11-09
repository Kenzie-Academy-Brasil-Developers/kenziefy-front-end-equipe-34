import styled from "styled-components";

const ModalCreateContainer = styled.div`
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

`

export { ModalCreateContainer }