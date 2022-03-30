import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContexts";
import TrackItHeader from "./../TrackItHeader";
import TrackItFooter from "./../TrackItFooter";
import NewHabbit from "../NewHabbit";
import Habbit from "../Habbit";
import { $H2, $Button, $Input, $WeekButton } from "./../Styles/GlobalComponents"
import { $HabitsPageSection } from "./style";

export default function HabitsPage() {

    const { authToken } = useContext(UserContext);
    console.log(authToken);
    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        //TODO colocar o token no axios.get()
        //const promisse = axios.get(url);
    }, []);

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