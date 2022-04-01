import styled from "styled-components";

export const $TodayHabbitContainer = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px 13px 13px 16px;
    display: grid;
    grid-template-areas: 
        "h3 button"
        "p1 button"
        "p2 button";

    h3 {
        grid-area: h3;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

    p {
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }

    p:first-child {
        grid-area: p1;
    }

    p:last-child {
        grid-area: p2;
    }

    span.selected {
        color: #8FC549;
    }

    &.selected {
        background-color: #8FC549;
    }

    button {
        grid-area: button;
        justify-self: end;
        width: 69px;
        height: 69px;
        border-radius: 5px;
        border: none;
        background-color: #EBEBEB;
        transition: background-color .3s ease-out;

        &.selected {
            background-color: #8FC549;
        }

        ion-icon {
            font-size: 45px;
            color: #FFFFFF;
            --ionicon-stroke-width: 64px;
        }
    }
`;