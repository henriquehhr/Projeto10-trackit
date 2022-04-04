import { useEffect, useContext, useState, useRef } from 'react';
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

    const [chosenDate, setChosenDate] = useState();
    const [calendarHabbitTracking, setCalendarHabbitTracking] = useState([]);
    const fullCalendar = useRef();
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
        fullCalendar.current = habbitTracking;
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
                    return <$Day className="habbits-done" onClick={() => displayHabbitsFromDate(dateString)}>{dayString}</$Day>
                return <$Day className="habbits-not-done" onClick={() => displayHabbitsFromDate(dateString)}>{dayString}</$Day>
            }
        }
        return <$Day>{dayString}</$Day>;
    }

    function displayHabbitsFromDate(date) {
        const week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        for (let day of fullCalendar.current) {
            if (day.day === date) {
                console.log(day);
                let count = 0;
                for (let habbit of day.habits) {
                    if (habbit.done)
                        count++;
                }
                const percent = Math.round((count * 100) / day.habits.length);
                setChosenDate(
                    <div className="overlay">
                        <div className="day-habbits">
                            <p className="x" onClick={() => setChosenDate(null)}>X</p>
                            <$H2>{week[day.habits[0].weekDay]}, {date.slice(0, 5)}</$H2>
                            <p className={percent == 100 ? "percent done" : "percent"}>{percent}% dos hábitos conclídos</p>
                            <br></br>
                            {
                                day.habits.map(habbit =>
                                    <div className='habbit' key={habbit.id}>
                                        <p className="habbit-name">{habbit.name}</p>
                                        {
                                            habbit.done ?
                                                <div className="done">
                                                    <ion-icon name="checkmark-outline"></ion-icon>
                                                </div> :
                                                <div className="not-done">
                                                    <ion-icon name="close-outline"></ion-icon>
                                                </div>
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                );
                return;
            }
        }
    }

    return (
        <$HistoryPageSection>
            <TrackItHeader />
            <$H2>Histórico</$H2>
            <Calendar
                calendarType="US"
                locale="pt-br"
                formatDay={(locale, date) => formatDate(date)}
            />
            {chosenDate}
            <TrackItFooter />
        </$HistoryPageSection>
    );
}