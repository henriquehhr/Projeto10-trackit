
import { axios } from "axios";
import TrackItHeader from "./../TrackItHeader";
import TrackItFooter from "./../TrackItFooter";
import NewHabbit from "../NewHabbit";
import Habbit from "../Habbit";
import { $H2, $Button, $Input, $WeekButton } from "./../Styles/GlobalComponents"
import { $HabitsPageSection } from "./style";

export default function HabitsPage() {

    return (
        <$HabitsPageSection>
            <TrackItHeader />
            <div className="create-habbit">
                <$H2>Meus hábitos</$H2>
                <$Button className="miniscule">+</$Button>
            </div>
            <NewHabbit />
            <Habbit />
            <p>Você não tem nenhum hábito cadastrado ainda.
                Adicione um hábito para começar a trackear!</p>
            <TrackItFooter />
        </$HabitsPageSection>
    );
}