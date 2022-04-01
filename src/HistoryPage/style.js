import styled from "styled-components";
import { $Section } from "../Styles/GlobalComponents";

export const $HistoryPageSection = styled($Section)`
    h2 {
        margin-bottom: 12px;
    }
`;

export const $Day = styled.div`

    height: 34px;
    width: 34px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    transition: all 0.3s ease-out;

    &.habbits-done {
        background-color: #8CC654;
    }

    &.habbits-not-done {
        background-color: #EB5766;
    }
`;