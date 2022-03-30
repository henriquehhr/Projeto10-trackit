import { $NewHabbitContainer } from "./style";
import { $Button, $Input, $WeekButton } from "../Styles/GlobalComponents";

export default function NewHabbit() {

    return (
        <$NewHabbitContainer>
            <$Input type="text" placeholder="nome do hábito" />
            <div className="week">
                <$WeekButton>D</$WeekButton>
                <$WeekButton>S</$WeekButton>
                <$WeekButton>T</$WeekButton>
                <$WeekButton>Q</$WeekButton>
                <$WeekButton>Q</$WeekButton>
                <$WeekButton>S</$WeekButton>
                <$WeekButton>S</$WeekButton>
            </div>
            <div className="buttons">
                <$Button className="medium inverted-color">Cancelar</$Button>
                <$Button className="medium">Salvar</$Button>
            </div>
        </$NewHabbitContainer>
    );
}