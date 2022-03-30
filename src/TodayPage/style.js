import styled from "styled-components";
import { $Section } from "../Styles/GlobalComponents";

export const $TodayPageSection = styled($Section)`
    p.habits-done{
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
        margin-bottom: 28px;

        &.habbit-done {
            color: #8FC549;
        }
    }

    ul {
        display: grid;
        gap: 10px;
    }
`;