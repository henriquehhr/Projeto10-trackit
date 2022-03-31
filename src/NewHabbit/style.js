import styled from "styled-components";

export const $NewHabbitContainer = styled.form`
    background-color: #FFFFFF;
    border-radius: 5px;
    width: 100%;
    padding: 18px 18px 15px 18px;
    display: flex;
    flex-direction: column;
    margin-bottom: 29px;

    ol.week {
        margin-top: 8px;
        display: flex;
        gap: 4px;
    }

    div.buttons {
        margin-top: 29px;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
`;