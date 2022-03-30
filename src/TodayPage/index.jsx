import TrackItHeader from "./../TrackItHeader";
import TrackItFooter from "./../TrackItFooter";
import { $H2 } from "../Styles/GlobalComponents";
import { $TodayPageSection } from "./style";
import TodayHabbit from "../TodayHabbit";

export default function TodayPage() {

    return (
        <$TodayPageSection>
            <TrackItHeader />
            <$H2> Segunda, 17/05</$H2>
            <p className="habits-done">Nenhum hábito concluído ainda</p>
            <ul>
                <TodayHabbit />
            </ul>
            <TrackItFooter />
        </$TodayPageSection>
    );
}