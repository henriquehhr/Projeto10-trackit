
import logo from "./../assets/img/logo-trackit.png"
import { $Form, $Button, $Input, $LogoImg } from "./../Styles/GlobalComponents";
import { $LoginPageSection } from "./style";

export default function LoginPage() {

    return (
        <$LoginPageSection>
            <$LogoImg src={logo} alt="logo" />
            <h1>TrackIt</h1>
            <$Form action="">
                <$Input
                    placeholder="email"
                    type="text"
                />
                <$Input
                    placeholder="senha"
                    type="password"
                />
                <$Button className="big">Entrar</$Button>
            </$Form>
            <p>Não tem uma conta? Cadastre-se!</p>
        </$LoginPageSection>
    );
}