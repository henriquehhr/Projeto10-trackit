import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./../assets/img/logo-trackit.png"
import { $Form, $Button, $Input, $LogoImg } from "./../Styles/GlobalComponents";
import { $LoginPageSection } from "./style";

export default function LoginPage() {

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    function sendLoginInfo(e) {
        e.preventDefault();
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promisse = axios.post(url, loginInfo);
        //TODO Enquanto estiver carregando, os campos e o botão devem ser desabilitados
        promisse.then(response => {

            navigate("/hoje");
        });
        //TODO Em caso de falha os campos e o botão devem ser habilitados novamente
        promisse.catch(() => alert("Erro no login"));
    }

    return (
        <$LoginPageSection>
            <$LogoImg src={logo} alt="logo" />
            <h1>TrackIt</h1>
            <$Form onSubmit={sendLoginInfo} action="">
                <$Input
                    placeholder="email"
                    type="text"
                    value={loginInfo.email}
                    onChange={e => setLoginInfo({ ...loginInfo, email: e.target.value })}
                />
                <$Input
                    placeholder="senha"
                    type="password"
                    value={loginInfo.password}
                    onChange={e => setLoginInfo({ ...loginInfo, password: e.target.value })}
                />
                <$Button type="submit" className="big">Entrar</$Button>
            </$Form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </$LoginPageSection>
    );
}