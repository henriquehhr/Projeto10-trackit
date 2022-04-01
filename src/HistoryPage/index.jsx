import { useEffect, useContext } from 'react';
import UserContext from "./../contexts/UserContexts";
import Calendar from 'react-calendar'
import axios from "axios";

import TrackItFooter from "./../TrackItFooter";
import TrackItHeader from "./../TrackItHeader";
import { $HistoryPageSection } from './style';
import { $H2 } from "../Styles/GlobalComponents";

export default function HistoryPage() {

    const { authToken } = useContext(UserContext);

    useEffect(() => {

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
        const config = {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        };
        const promisse = axios.get(url, config);
        //TODO implementar o then e catch
        promisse.then();
        promisse.catch();
    }, []);

    return (
        <$HistoryPageSection>
            <TrackItHeader />
            <$H2>Histórico</$H2>
            <Calendar
                calendarType="US"
                locale="pt-br"
                className="calendar"
            />
            <TrackItFooter />
        </$HistoryPageSection>
    );
}