import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./../assets/img/logo-trackit.png"
import { $Form, $Button, $Input, $LogoImg } from "./../Styles/GlobalComponents";
import { $SignInPageSection } from "./style";

export default function SignInPage() {

    const [singinInfo, setSinginInfo] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    const navigate = useNavigate();

    function sendSinginInfo(e) {
        e.preventDefault();
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promisse = axios.post(url, singinInfo);
        //TODO Enquanto estiver carregando, os campos e o botão devem ser desabilitados
        promisse.then(() => navigate("/"));
        promisse.catch(() => alert("Erro no cadastro. Tente novamente."));
        //TODO Em caso de falha os campos/botão devem ser habilitados novamente
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
                />
                <$Input
                    placeholder="senha"
                    type="password"
                    value={singinInfo.password}
                    onChange={e => setSinginInfo({ ...singinInfo, password: e.target.value })}
                />
                <$Input
                    placeholder="nome"
                    type="text"
                    value={singinInfo.name}
                    onChange={e => setSinginInfo({ ...singinInfo, name: e.target.value })}
                />
                <$Input
                    placeholder="foto"
                    type="text"
                    value={singinInfo.image}
                    onChange={e => setSinginInfo({ ...singinInfo, image: e.target.value })}
                />
                <$Button type="submit" className="big">Cadastrar</$Button>
            </$Form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </$SignInPageSection>
    );
}