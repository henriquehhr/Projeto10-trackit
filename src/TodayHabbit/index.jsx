import { useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContexts";

import { $TodayHabbitContainer } from "./style";

export default function TodayHabbit({ id, name, done, currentSequence, highestSequence, habbits, setHabbits }) {

    const { authToken } = useContext(UserContext);

    function toggleHabbit() {
        const check = done ? "uncheck" : "check";
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${check}`;
        const config = {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        };
        const promisse = axios.post(url, {}, config);
        //TODO confirmar pra ver se preciso alterar manualmente o valor de currentSequence
        promisse.then(() => {
            done = !done;
            const newHabbits = habbits.filter(habbit => habbit.id != id);
            setHabbits([...newHabbits, { id, name, done, currentSequence, highestSequence }]);
        });
        promisse.catch(err => console.log(err));
    }

    return (
        <$TodayHabbitContainer>
            <h3>{name}</h3>
            <p>Sequência atual: <span className={done ? "selected" : ""}>{currentSequence}</span></p>
            <p>Seu recorde: <span className={currentSequence == highestSequence ? "selected" : ""}>{highestSequence}</span></p>
            <button className={done ? "selected" : ""} onClick={toggleHabbit}>
                <ion-icon name="checkmark-outline"></ion-icon>
            </button>
        </$TodayHabbitContainer>
    );
}