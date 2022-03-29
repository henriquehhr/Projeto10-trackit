import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitsPage from "./../HabitsPage";
import SignInPage from "./../SignInPage";
import TodayPage from "./../TodayPage";
import HistoryPage from "./../HistoryPage";
import LoginPage from "./../LoginPage";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignInPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/historico" element={<HistoryPage />} />
            </Routes>
        </BrowserRouter>
    );
}