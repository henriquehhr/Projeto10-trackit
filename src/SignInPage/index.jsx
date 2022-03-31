import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

import logo from "./../assets/img/logo-trackit.png"
import { $Form, $Button, $Input, $LogoImg } from "./../Styles/GlobalComponents";
import { $SignInPageSection } from "./style";

export default function SignInPage() {

    const [disabled, setDisabled] = useState(false);
    const [singinInfo, setSinginInfo] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    const navigate = useNavigate();

    function sendSinginInfo(e) {
        e.preventDefault();
        setDisabled(true);
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promisse = axios.post(url, singinInfo);
        promisse.then(() => navigate("/"));
        promisse.catch(() => {
            setDisabled(false);
            alert("Erro no cadastro. Tente novamente.");
        });
    }

    return (
        <$SignInPageSection>
            <$LogoImg src={logo} alt="logo" />
            <h1>TrackIt</h1>
            <$Form onSubmit={sendSinginInfo} action="">
                <$Input
                    placeholder="email"
                    type="text"
                    value={singinInfo.email}
                    onChange={e => setSinginInfo({ ...singinInfo, email: e.target.value })}
                    disabled={disabled}
                />
                <$Input
                    placeholder="senha"
                    type="password"
                    value={singinInfo.password}
                    onChange={e => setSinginInfo({ ...singinInfo, password: e.target.value })}
                    disabled={disabled}
                />
                <$Input
                    placeholder="nome"
                    type="text"
                    value={singinInfo.name}
                    onChange={e => setSinginInfo({ ...singinInfo, name: e.target.value })}
                    disabled={disabled}
                />
                <$Input
                    placeholder="foto"
                    type="text"
                    value={singinInfo.image}
                    onChange={e => setSinginInfo({ ...singinInfo, image: e.target.value })}
                    disabled={disabled}
                />
                <$Button type="submit" className="big" disabled={disabled}>
                    {!disabled ? "Cadastrar" : <ThreeDots color="#FFFFFF" height={55} width={55} />}
                </$Button>
            </$Form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </$SignInPageSection>
    );
}