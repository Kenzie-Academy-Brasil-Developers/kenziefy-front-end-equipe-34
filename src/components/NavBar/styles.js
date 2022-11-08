import styled from "styled-components";

const NavMain = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 72px;

    background-color: var(--grey-3);
`

const DivCenter = styled.div`
    display: flex;
    justify-content: space-between;

    width: 90%;
    max-width: 1000px;


    img {
        width: 150px;
    }
`


export { NavMain, DivCenter }