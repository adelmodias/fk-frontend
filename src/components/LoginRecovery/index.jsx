import { Link } from "react-router-dom";

import { FormContainer, FormWrap, Form, LoginButton, LinkCreateAccWrap } from "./styled";

import logoSvg from "../../assets/fk-logo.svg";

export function LoginRecovery() {
    return (
        <FormContainer>
            <FormWrap>
                <img src={logoSvg} alt="FK Social" />
                <h3>Recuperar acesso à conta</h3>
                <p>Uma nova senha temporária será enviada para o e-mail cadastrado. Digite o e-mail abaixo para recebê-la.</p>

                <Form>
                    <input type="email" placeholder="Seu E-mail" required />
                </Form>

                <LoginButton type="submit">Solicitar nova senha</LoginButton>

                <LinkCreateAccWrap>
                    <Link to="/">Voltar para o Login</Link>
                </LinkCreateAccWrap>
            </FormWrap>
        </FormContainer>
    );
}
