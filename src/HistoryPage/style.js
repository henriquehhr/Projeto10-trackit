import styled from "styled-components";
import { $Section } from "../Styles/GlobalComponents";

export const $HistoryPageSection = styled($Section)`
    .react-calendar {
        border-radius: 10px;
        background-color: #FFFFFF;
        padding: 12px 8px 25px 8px;
        height: 402px;

        .react-calendar__viewContainer {
            height: max-content;

            .react-calendar__month-view {
                height: 100%;

                div {
                    //height: 100%;
                }
            }
        }

        .react-calendar__navigation {
            display: flex;
            justify-content: space-around;
            margin: 0 0 40px 0;

            .react-calendar__navigation__label {
                flex-grow: 0 !important;
            }
        }

        .react-calendar__month-view__weekdays__weekday {
            display: grid;
            place-content: center;
        }

        .react-calendar__month-view__days {
            display: grid !important;
            grid-template-columns: repeat(7, 1FR);
        }

        .react-calendar__tile {

        }
    }
`;