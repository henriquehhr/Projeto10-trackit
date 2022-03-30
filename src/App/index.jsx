import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContexts";
import HabitsPage from "./../HabitsPage";
import SignInPage from "./../SignInPage";
import TodayPage from "./../TodayPage";
import HistoryPage from "./../HistoryPage";
import LoginPage from "./../LoginPage";
import "./../reset.css";

export default function App() {

    const [authToken, setAuthToken] = useState("");
    const contextValue = { authToken, setAuthToken };

    return (
        <UserContext.Provider value={contextValue}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<SignInPage />} />
                    <Route path="/habitos" element={<HabitsPage />} />
                    <Route path="/hoje" element={<TodayPage />} />
                    <Route path="/historico" element={<HistoryPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}