import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "../contexts/UserContexts";
import HabitsPage from "./../HabitsPage";
import SignInPage from "./../SignInPage";
import TodayPage from "./../TodayPage";
import HistoryPage from "./../HistoryPage";
import LoginPage from "./../LoginPage";
import "./../reset.css";

export default function App() {

    const [authToken, setAuthToken] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [habbits, setHabbits] = useState([]);
    const contextValue = { authToken, setAuthToken, userAvatar, setUserAvatar, habbits, setHabbits };
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem("chave-secreta"));
        if (loggedUser) {
            setUserAvatar(loggedUser.image);
            setAuthToken(loggedUser.token);
            if (location.pathname !== "/")
                navigate(location.pathname);
            else
                navigate("/hoje");
        }
    }, []);

    return (
        <UserContext.Provider value={contextValue}>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignInPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/historico" element={<HistoryPage />} />
            </Routes>
        </UserContext.Provider>
    );
}