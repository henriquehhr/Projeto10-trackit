import { useState, useEffect, useContext } from "react";
import axios from "axios";

import UserContext from "../contexts/UserContexts";
import TrackItHeader from "./../TrackItHeader";
import TrackItFooter from "./../TrackItFooter";
import NewHabbit from "../NewHabbit";
import Habbit from "../Habbit";
import { $H2, $Button } from "./../Styles/GlobalComponents"
import { $HabitsPageSection } from "./style";

export default function HabitsPage() {

    const [habbits, setHabbits] = useState(null);
    const [createHabbit, setCreateHabbit] = useState(false);
    const [weekButtons, setWeekButtons] = useState([
        false, false, false, false, false, false, false,
    ]);
    const [habbitTitle, setHabbitTitle] = useState("");
    const { authToken } = useContext(UserContext);

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        }
        const promisse = axios.get(url, config);
        promisse.then(response => setHabbits(response.data));
    }, [authToken]);

    function renderCreatHabbit() {
        if (!createHabbit)
            return;
        return <NewHabbit
            setCreateHabbit={setCreateHabbit}
            habbits={habbits}
            setHabbits={setHabbits}
            weekButtons={weekButtons}
            setWeekButtons={setWeekButtons}
            habbitTitle={habbitTitle}
            setHabbitTitle={setHabbitTitle}
        />;
    }
    //TODO armazenar os hábitos no contexto global para não precisar ver a tela de loading toda vez que reentrar em /habitos
    function renderHabbits() {
        if (!habbits)
            return <p>Carregando os hábitos</p>
        if (habbits.length == 0)
            return (
                <p>Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!</p>
            );
        return (
            habbits.map(habbit => <Habbit
                key={habbit.id}
                id={habbit.id}
                name={habbit.name}
                days={habbit.days}
                habbits={habbits}
                setHabbits={setHabbits}
            />).reverse()
        );
    }

    return (
        <$HabitsPageSection>
            <TrackItHeader />
            <div className="create-habbit">
                <$H2>Meus hábitos</$H2>
                <$Button className="miniscule" onClick={() => setCreateHabbit(true)}>
                    +
                </$Button>
            </div>
            <ul>
                {renderCreatHabbit()}
                {renderHabbits()}
            </ul>
            <TrackItFooter creatHabbitsPage={habbits} />
        </$HabitsPageSection>
    );
}