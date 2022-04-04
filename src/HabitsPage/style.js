import styled from "styled-components";
import { $Section } from "../Styles/GlobalComponents";

export const $HabitsPageSection = styled($Section)`

    div.create-habbit {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    p {
        color: #666666;
        font-size: 18px;
        line-height: 22px;
    }

    .transition-habbit-enter {
        opacity: 0;
    }
    .transition-habbit-enter-active {
        opacity: 1;
        transition: opacity 500ms ease-in;
    }
    .transition-habbit-exit {
        opacity: 1;
    }
    .transition-habbit-exit-active {
        opacity: 0;
        transition: opacity 500ms ease-in;
    }
`;