import { $WeekButton } from "../Styles/GlobalComponents";
import { $HabbitContainer } from "./style";


export default function Habbit() {

    return (
        <$HabbitContainer>
            <p>Ler 1 capítulo de livro</p>
            <ion-icon name="trash-outline"></ion-icon>
            <div className="week">
                <$WeekButton>D</$WeekButton>
                <$WeekButton>S</$WeekButton>
                <$WeekButton>T</$WeekButton>
                <$WeekButton>Q</$WeekButton>
                <$WeekButton>Q</$WeekButton>
                <$WeekButton>S</$WeekButton>
                <$WeekButton>S</$WeekButton>
            </div>
        </$HabbitContainer>
    );
}