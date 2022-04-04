import styled from "styled-components";
import { $Section } from "../Styles/GlobalComponents";

import { keyframes } from 'styled-components';
import { fadeIn } from "react-animations";
import { fadeOut } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;

export const $Overlay = styled.div`
    animation: 0.5s ${fadeInAnimation};
    //animation: 0.5s ${fadeOutAnimation};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0 20px;
    display: flex;

    div.day-habbits {
        position: relative;
        margin: auto 0;
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;

        p.x {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 20px;
            font-weight: 500;
        }

        p.done {
            color: #8CC654;
        }

        p.habbit-name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        div.habbit {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: space-between;
        }

        div.done {
            background-color: #8CC654;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            color: #FFFFFF;
            margin-bottom: 10px;
        }

        div.not-done {
            background-color: #EB5766;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            color: #FFFFFF;
            margin-bottom: 10px;
        }
    }
`;

export const $HistoryPageSection = styled($Section)`
    h2 {
        margin-bottom: 12px;
    }

    /*div.overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 0 20px;
        display: flex;
    }

    div.day-habbits {
        position: relative;
        margin: auto 0;
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;

        p.x {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 20px;
            font-weight: 500;
        }

        p.done {
            color: #8CC654;
        }

        p.habbit-name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        div.habbit {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: space-between;
        }

        div.done {
            background-color: #8CC654;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            color: #FFFFFF;
            margin-bottom: 10px;
        }

        div.not-done {
            background-color: #EB5766;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            color: #FFFFFF;
            margin-bottom: 10px;
        }
    }
*/
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