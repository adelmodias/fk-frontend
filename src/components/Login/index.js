import { Link } from "react-router-dom";

import { FormContainer, FormWrap, Form, LoginButton, LinksWrap, LinkCreateAccWrap } from "./styled";

import logoSvg from "../../assets/fk-logo.svg";

export function Login() {
    return (
        <FormContainer>
            <FormWrap>
                <img src={logoSvg} alt="FK Social" />
                <h3>Já possui uma conta?</h3>
                <Form>
                    <input type="email" placeholder="Seu E-mail" required />
                    <input type="password" placeholder="Sua Senha" required />
                </Form>

                <LinksWrap>
                    <div>
                        <input type="checkbox" id="remember" />
                        <label for="remember">Lembrar-me?</label>
                    </div>
                    <Link to="/recovery-password">Recuperar senha</Link>
                </LinksWrap>

                <LoginButton type="submit">Fazer Login</LoginButton>
                <LinkCreateAccWrap>
                    <Link to="/create-account">Criar conta</Link>
                </LinkCreateAccWrap>
            </FormWrap>
        </FormContainer>
    );
}
