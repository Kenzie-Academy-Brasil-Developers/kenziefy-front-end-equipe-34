import styled from "styled-components";

const HeaderMain = styled.header`
    display: flex;
    align-items: center;
    justify-content: center ;

    border-top: 1px;
    border-bottom: 1px;
    border-color: var(--grey-2);
    border-style: solid;

    width: 100vw;
    min-height: 118px;

    background-color: var(--grey-3);

    > div {
        display: flex;

        width: 90%;
        max-width: 1000px;
    }
`

export { HeaderMain }