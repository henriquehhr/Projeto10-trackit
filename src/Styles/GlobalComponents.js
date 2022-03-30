import styled from "styled-components";

export const $Button = styled.button`
    border: none;
    background: #52B6FF;
    color: #FFFFFF;
    border-radius: 5px;
    text-align: center;

    &.inverted-color {
        background: #FFFFFF;
        color: #52B6FF;
    }

    &.big {
        height: 45px;
        font-size: 21px;
    }

    &.small {
        height: 35px;
        font-size: 16px;
        padding: 0 17px;
    }

`;

export const $Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    height: 45px;
    padding-left: 10px;

    ::placeholder {
        color: #DBDBDB;
    }
`;

export const $Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
`;

export const $LogoImg = styled.img`
    aspect-ratio: 332 / 196;
    height: auto;
    Width : 180px;
`;

export const $H2 = styled.h2`
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`;

export const $Section = styled.section`
    background-color: #E5E5E5;
    margin: 92px 18px 116px 18px;
`;