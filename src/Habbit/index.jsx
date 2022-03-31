import { useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContexts";
import { $WeekButton } from "../Styles/GlobalComponents";
import { $HabbitContainer } from "./style";


export default function Habbit({ habbits, setHabbits, id, name, days }) {

    const { authToken } = useContext(UserContext);
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    function renderWeekButtons() {
        return weekDays.map((week, i) => {
            return (
                <$WeekButton className={days.includes(i) ? "selected" : ""} key={i}>
                    {week}
                </$WeekButton>
            );
        });
    }

    function deleteHabbit() {
        const confirmation = window.confirm("Deseja realmente apagar o hábito?");
        if (!confirmation)
            return;
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        const config = {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        };
        const promisse = axios.delete(url, config);
        promisse.then(() => {
            const newHabbits = habbits.filter(habbit => habbit.id != id);
            setHabbits(newHabbits);
        });
        promisse.catch(err => console.log(err));
    }

    return (
        <$HabbitContainer>
            <p>{name}</p>
            <ion-icon name="trash-outline" onClick={deleteHabbit}></ion-icon>
            <ol className="week">{renderWeekButtons()}</ol>
        </$HabbitContainer>
    );
}