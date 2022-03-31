import { useContext } from "react";
import UserContex from "./../contexts/UserContexts"

import { $Header } from "./style";

export default function TrackItHeader() {

    const { userAvatar } = useContext(UserContex);

    return (
        <$Header>
            <h1>TrackIt</h1>
            <img src={userAvatar} alt="user avatar" />
        </$Header>
    );
}