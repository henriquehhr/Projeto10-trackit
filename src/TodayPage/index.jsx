import { useState, useEffect, useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import UserContext from "./../contexts/UserContexts";

import TrackItHeader from "./../TrackItHeader";
import TrackItFooter from "./../TrackItFooter";
import { $H2 } from "../Styles/GlobalComponents";
import { $TodayPageSection } from "./style";
import TodayHabbit from "../TodayHabbit";

export default function TodayPage() {

    const [habbits, setHabbits] = useState([]);
    const { authToken } = useContext(UserContext);

    const week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const now = dayjs();
    const date = `${week[now.$W]}, ${now.$D}/${now.$M < 9 ? "0" + (now.$M + 1) : now.$M + 1}`;

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        };
        const promisse = axios.get(url, config);
        promisse.then(response => setHabbits(response.data));
        promisse.catch(err => console.log(err));
    }, []);

    function getPercentHabbitsDone() {
        if (habbits.length == 0)
            return <p className="habits-done">Nenhum hábito cadastrado para hoje</p>;
        let count = 0;
        for (let habbit of habbits) {
            if (habbit.done)
                count++;
        }
        const percent = Math.round((count * 100) / habbits.length);
        if (!percent)
            return <p className="habits-done">Nenhum hábito concluído ainda</p>;
        return <p className="habits-done habbit-done">{`${percent}% dos hábitos concluídos`}</p>;
    }

    //TODO os hábitos estão mudando de ordem depois que desmarca um deles
    function renderTodayHabbits() {
        if (habbits.length == 0)
            return;
        return (
            habbits.map(habbit =>
                <TodayHabbit
                    key={habbit.id}
                    id={habbit.id}
                    name={habbit.name}
                    done={habbit.done}
                    currentSequence={habbit.currentSequence}
                    highestSequence={habbit.highestSequence}
                    initialHighestSequence={habbit.highestSequence}
                    habbits={habbits}
                    setHabbits={setHabbits}
                />)
        );
    }

    return (
        <$TodayPageSection>
            <TrackItHeader />
            <$H2>{date}</$H2>
            {getPercentHabbitsDone()}
            <ul>
                {renderTodayHabbits()}
            </ul>
            <TrackItFooter />
        </$TodayPageSection>
    );
}