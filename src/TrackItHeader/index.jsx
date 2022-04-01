import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContex from "./../contexts/UserContexts"

import { $Header } from "./style";

export default function TrackItHeader() {

    const { userAvatar } = useContext(UserContex);
    const navigate = useNavigate();

    function logoff() {
        localStorage.removeItem("chave-secreta");
        navigate("/");
    }

    return (
        <$Header>
            <h1>TrackIt</h1>
            <img src={userAvatar} alt="user avatar" onClick={logoff} />
        </$Header>
    );
}