import { useContext, useEffect } from 'react';
import UserContext from "./../contexts/UserContexts"
import { Link } from 'react-router-dom';
import axios from "axios";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { $Button } from '../Styles/GlobalComponents';
import { $Footer } from "./style";

export default function TrackItFooter({ creatHabbitsPage }) {

    const { habbits, setHabbits, authToken } = useContext(UserContext);

    let count = 0;
    for (let habbit of habbits) {
        if (habbit.done)
            count++;
    }
    let percent = Math.round((count * 100) / habbits.length);
    if (habbits.length == 0)
        percent = 0;

    useEffect(() => {
        if (!authToken)
            return;
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        };
        const promisse = axios.get(url, config);
        promisse.then(response => setHabbits(response.data));
        promisse.catch(err => console.log(err));
    }, [authToken, creatHabbitsPage]);

    return (
        <$Footer>
            <Link to="/habitos">
                <$Button className="inverted-color medium">Hábitos</$Button>
            </Link>
            <div className="todayContainer">
                <Link to="/hoje">
                    <CircularProgressbar
                        value={percent}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            pathColor: '#FFFFFF',
                            textColor: '#FFFFFF',
                            trailColor: 'transparent',
                            backgroundColor: '#52B6FF',
                            textSize: '18px'
                        })} />
                </Link>
            </div>
            <Link to="/historico">
                <$Button className="inverted-color medium">Histórico</$Button>
            </Link>
        </$Footer>
    );
}