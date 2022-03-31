import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { $Button } from '../Styles/GlobalComponents';
import { $Footer } from "./style";

export default function TrackItFooter() {

    return (
        <$Footer>
            <Link to="/habitos">
                <$Button className="inverted-color medium">Hábitos</$Button>
            </Link>
            <div className="todayContainer">
                <Link to="/hoje">
                    <CircularProgressbar
                        value={70}
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