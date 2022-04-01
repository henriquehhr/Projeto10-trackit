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

    /*h2 {
        transition: all 5s ease-in;

        &.grande {
            font-size: 30px;
        }
    }*/

    ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;