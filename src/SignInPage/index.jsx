
import logo from "./../assets/img/logo-trackit.png"
import { $Form, $Button, $Input, $LogoImg } from "./../Styles/GlobalComponents";
import { $SignInPageSection } from "./style";

export default function SignInPage() {

    return (
        <$SignInPageSection>
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
                <$Input
                    placeholder="nome"
                    type="text"
                />
                <$Input
                    placeholder="foto"
                    type="text"
                />
                <$Button className="big">Entrar</$Button>
            </$Form>
            <p>Já tem uma conta? Faça login!</p>
        </$SignInPageSection>
    );
}