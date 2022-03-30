import { $TodayHabbitContainer } from "./style";

export default function TodayHabbit() {

    return (
        <$TodayHabbitContainer>
            <h3>Ler 1 capítulo de livro</h3>
            <p>Sequência atual: <span className="selected">4 dias</span></p>
            <p>Seu recorde: <span>5 dias</span></p>
            <button><ion-icon name="checkmark-outline"></ion-icon></button>
        </$TodayHabbitContainer>
    );
}