import axios from "axios";

import { $TodayHabbitContainer } from "./style";

export default function TodayHabbit({ name, done, currentSequence, highestSequence }) {

    return (
        <$TodayHabbitContainer>
            <h3>{name}</h3>
            <p>Sequência atual: <span className="selected">{currentSequence}</span></p>
            <p>Seu recorde: <span>{highestSequence}</span></p>
            <button className={done ? "selected" : ""}><ion-icon name="checkmark-outline"></ion-icon></button>
        </$TodayHabbitContainer>
    );
}