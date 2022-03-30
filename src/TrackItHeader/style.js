import styled from "styled-components";

export const $Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 18px;

    h1 {
        font-family: 'Playball';
        font-size: 39px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`;