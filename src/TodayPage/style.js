import styled from "styled-components";
import { $Section } from "../Styles/GlobalComponents";

export const $TodayPageSection = styled($Section)`
    p.habits-done{
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
        margin-bottom: 28px;
        transition: all 0.5s ease-out;

        &.habbit-done {
            color: #8FC549;
        }
    }

    ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;