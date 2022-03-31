import { useContext, useState } from "react";
import UserContext from "../contexts/UserContexts";
import axios from "axios";

import { $NewHabbitContainer } from "./style";
import { $Button, $Input, $WeekButton } from "../Styles/GlobalComponents";

export default function NewHabbit({ setCreateHabbit, habbits, setHabbits, weekButtons, setWeekButtons, habbitTitle, setHabbitTitle }) {

    const [disabled, setDisabled] = useState(false);
    const { authToken } = useContext(UserContext);
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    function saveHabbit(e) {
        e.preventDefault();
        //TODO fazer validações antes de salvar o hábito
        let selectedDays = weekButtons.map((day, i) => {
            if (day) return i;
            else return false;
        });
        selectedDays = selectedDays.filter(day => day !== false);
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const body = {
            name: habbitTitle,
            days: selectedDays
        };
        const config = {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        };

        const promisse = axios.post(url, body, config);
        setDisabled(true);
        promisse.then((response) => {
            setHabbits([...habbits, {
                id: response.data.id,
                name: response.data.name,
                days: response.data.days
            }]);
            setDisabled(false);
            setCreateHabbit(false);
            setHabbitTitle("");
            setWeekButtons([
                false, false, false, false, false, false, false,
            ]);
        });
        promisse.catch((err) => {
            alert("Erro na hora de salvar o hábito");
            setDisabled(false);
        });
    }

    function renderWeekButtons() {
        return (
            weekDays.map((day, i) => {
                const selected = weekButtons[i] ? "selected" : "";
                const click = () => {
                    const newWeekButton = [...weekButtons];
                    newWeekButton[i] = !weekButtons[i];
                    setWeekButtons(newWeekButton);
                };
                return <$WeekButton type="button" className={selected} onClick={click} key={i} disabled={disabled}>
                    {day}
                </$WeekButton>
            })
        );
    }

    //TODO adicionar animação do formulário abrindo
    return (
        <$NewHabbitContainer onSubmit={saveHabbit}>
            <$Input
                type="text"
                value={habbitTitle}
                placeholder="nome do hábito"
                onChange={e => setHabbitTitle(e.target.value)}
                disabled={disabled}
            />
            <ol className="week">{renderWeekButtons()}</ol>
            <div className="buttons">
                <$Button
                    type="button"
                    className="medium inverted-color"
                    onClick={() => setCreateHabbit(false)}
                    disabled={disabled}>
                    Cancelar
                </$Button>
                <$Button type="submit" className="medium" disabled={disabled}>Salvar</$Button>
            </div>
        </$NewHabbitContainer>
    );
}