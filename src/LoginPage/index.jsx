import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

import UserContext from "./../contexts/UserContexts"
import logo from "./../assets/img/logo-trackit.png"
import { $Form, $Button, $Input, $LogoImg } from "./../Styles/GlobalComponents";
import { $LoginPageSection } from "./style";

export default function LoginPage() {

    const [disabled, setDisabled] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const { setAuthToken, setUserAvatar } = useContext(UserContext);

    function sendLoginInfo(e) {
        e.preventDefault();
        setDisabled(true);
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promisse = axios.post(url, loginInfo);
        promisse.then(response => {
            setAuthToken(response.data.token);
            setUserAvatar(response.data.image);
            navigate("/hoje");
        });
        promisse.catch(() => {
            setDisabled(false);
            alert("Erro no login");
        });
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
                    disabled={disabled}
                />
                <$Input
                    placeholder="senha"
                    type="password"
                    value={loginInfo.password}
                    onChange={e => setLoginInfo({ ...loginInfo, password: e.target.value })}
                    disabled={disabled}
                />
                <$Button type="submit" className="big" disabled={disabled}>
                    {!disabled ? "Entrar" : <ThreeDots color="#FFFFFF" height={55} width={55} />}
                </$Button>
            </$Form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </$LoginPageSection>
    );
}