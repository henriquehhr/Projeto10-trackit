import { useEffect, useContext, useState } from 'react';
import UserContext from "./../contexts/UserContexts";
import Calendar from 'react-calendar'
import axios from "axios";
import dayjs from "dayjs";

import TrackItFooter from "./../TrackItFooter";
import TrackItHeader from "./../TrackItHeader";
import { $HistoryPageSection, $Day } from './style';
import { $H2 } from "../Styles/GlobalComponents";
import "./calendar.css";

export default function HistoryPage() {

    //const [date, setDate] = useState(new Date());
    const [calendarHabbitTracking, setCalendarHabbitTracking] = useState([]);
    const { authToken } = useContext(UserContext);

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
        const config = {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        };
        const promisse = axios.get(url, config);
        promisse.then(({ data }) => getCalendarHabbitTracking(data));
        promisse.catch(err => console.log(err));
    }, []);

    function getCalendarHabbitTracking(habbitTracking) {
        const calendar = [];
        for (let day of habbitTracking) {
            let date = day.day;
            let done = true;
            for (let habbit of day.habits) {
                if (!habbit.done) {
                    done = false;
                    break;
                }
            }
            calendar.push({ date, done });
        }
        setCalendarHabbitTracking(calendar);
    }

    function formatDate(date) {
        const now = dayjs(date);
        const dayString = now.$D < 10 ? "0" + now.$D : "" + now.$D;
        const monthString = now.$M < 9 ? "0" + (now.$M + 1) : "" + (now.$M + 1);
        const yearString = "" + now.$y;
        const dateString = dayString + "/" + monthString + "/" + yearString;

        for (let day of calendarHabbitTracking) {
            if (day.date == dateString) {
                if (day.done)
                    return <$Day className="habbits-done">{dayString}</$Day>
                return <$Day className="habbits-not-done">{dayString}</$Day>
            }
        }
        return dayString;
    }

    return (
        <$HistoryPageSection>
            <TrackItHeader />
            <$H2>Histórico</$H2>
            <Calendar
                //onClickDay={setDate}
                //value={date}
                calendarType="US"
                locale="pt-br"
                formatDay={(locale, date) => formatDate(date)}
            />
            <TrackItFooter />
        </$HistoryPageSection>
    );
}