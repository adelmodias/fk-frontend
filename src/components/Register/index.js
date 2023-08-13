import { Link } from "react-router-dom";

import { FormContainer, FormWrap, Form, LoginButton, LinkCreateAccWrap } from "./styled";

import logoSvg from "../../assets/fk-logo.svg";

export function Register() {
    return (
        <FormContainer>
            <FormWrap>
                <img src={logoSvg} alt="FK Social" />
                <h3>Criar uma conta</h3>
                <Form>
                    <input type="text" placeholder="Nome" required />
                    <input type="text" placeholder="Telefone" required />
                    <input type="email" placeholder="E-mail" required />
                    <input type="password" placeholder="Senha" required />
                </Form>

                <LoginButton type="submit">Criar conta</LoginButton>
                <LinkCreateAccWrap>
                    <Link to="/">Fazer Login</Link>
                </LinkCreateAccWrap>
            </FormWrap>
        </FormContainer>
    );
}
