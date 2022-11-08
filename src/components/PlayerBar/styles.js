import styled from "styled-components";

const PlayerBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    width: 100vw;
    height: 80px;

    background-color: var(--grey-2);

    position: fixed;
    bottom: 0;
    
    .left {
        top: -55px;
        left: 1.5rem;
    }

    .right {
        top: -55px;
        right: 1.5rem;
    }

    > button {
        position: absolute;
    }

    > button > svg {
        width: 20;
        height: 20px;
    }
`

export { PlayerBarContainer }