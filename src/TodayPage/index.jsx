import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "./../contexts/UserContexts";

import TrackItHeader from "./../TrackItHeader";
import TrackItFooter from "./../TrackItFooter";
import { $H2 } from "../Styles/GlobalComponents";
import { $TodayPageSection } from "./style";
import TodayHabbit from "../TodayHabbit";

export default function TodayPage() {

    const [habbits, setHabbits] = useState([]);
    const { authToken } = useContext(UserContext);

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        };
        const promisse = axios.get(url, config);
        promisse.then(response => setHabbits(response.data));
        promisse.catch(err => console.log(err.data));
    }, []);

    function renderTodayHabbits() {
        if (habbits.length == 0)
            return;
        return (
            habbits.map(habbit =>
                <TodayHabbit
                    key={habbit.id}
                    name={habbit.name}
                    done={habbit.done}
                    currentSequence={habbit.currentSequence}
                    highestSequence={habbit.highestSequence}
                />)
        );
    }

    return (
        <$TodayPageSection>
            <TrackItHeader />
            <$H2> Segunda, 17/05</$H2>
            <p className="habits-done">Nenhum hábito concluído ainda</p>
            <ul>
                {renderTodayHabbits()}
            </ul>
            <TrackItFooter />
        </$TodayPageSection>
    );
}