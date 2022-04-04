import styled from "styled-components";

export const $HabbitContainer = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    max-width: 100%;
    padding: 18px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    position: relative;
    
    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    

    ion-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 15px;

    }

    ol.week {
        margin-top: 8px;
        display: flex;
        gap: 4px;
    }
`;