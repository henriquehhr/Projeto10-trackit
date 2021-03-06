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

    const [authToken, setAuthToken] = useState(JSON.parse(localStorage.getItem("chave-secreta"))?.token);
    const [userAvatar, setUserAvatar] = useState(JSON.parse(localStorage.getItem("chave-secreta"))?.image);
    const [habbits, setHabbits] = useState([]);
    const contextValue = { authToken, setAuthToken, userAvatar, setUserAvatar, habbits, setHabbits };
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (authToken) {
            if (location.pathname !== "/" && location.pathname !== "/cadastro")
                navigate(location.pathname);
            else
                navigate("/hoje");
        } else {
            if (location.pathname === "/habitos" || location.pathname === "/hoje" || location.pathname === "/historico")
                navigate("/");
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