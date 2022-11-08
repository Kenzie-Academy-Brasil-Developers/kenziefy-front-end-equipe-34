import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    padding: ${({padding}) => padding === "none" ? "initial" : "0.5rem 1.5rem"};
    color: var(--grey-0);

    font-weight: 700;
    font-size: 1rem;

    border: none;
    border-radius: 8px;

    box-sizing: border-box;

    width: ${({width}) => width ? `${width}%` : "initial"};

    background-color: ${({color}) => {
        if(!color) return "var(--grey-0)"
        if(color === "g0") return "var(--grey-0)"
        if(color === "g1") return "var(--grey-1)"
        if(color === "g2") return "var(--grey-2)"
        if(color === "g3") return "var(--grey-3)"

        if(color === "b0") return "var(--blue-0)"
        if(color === "b1") return "var(--blue-1)"
        if(color === "b2") return "var(--blue-2)"
        if(color === "b3") return "var(--blue-3)"
    }};
`

export { Button }