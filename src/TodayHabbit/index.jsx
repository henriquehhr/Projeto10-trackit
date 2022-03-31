import { useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContexts";

import { $TodayHabbitContainer } from "./style";

export default function TodayHabbit({ id, name, done, currentSequence, highestSequence, initialHighestSequence, habbits, setHabbits }) {

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
        promisse.then(() => {
            done = !done;
            if (done) {
                currentSequence++;
                if (currentSequence > highestSequence)
                    highestSequence++;
            } else {
                currentSequence--;
                //TODO confirmar a lógica da alteração do highestSequence
                if (highestSequence == initialHighestSequence)
                    highestSequence--;
            }
            //const newHabbits = habbits.filter(habbit => habbit.id != id);
            for (let habbit of habbits) {
                if (habbit.id == id) {
                    habbit.done = done;
                    habbit.currentSequence = currentSequence;
                    habbit.highestSequence = highestSequence;
                    break;
                }
            }
            setHabbits([...habbits]);
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