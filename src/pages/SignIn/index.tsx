import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './style'

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="LogoGo" />

            <form >
                <h1>Faça seu logon</h1>
                <input placeholder="Email" />
                <input type="password" placeholder="Senha" />

                <button type="submit">Entrar</button>

                <a href="Forgot">Esqueci minha senha
            <FiLogIn />
                </a>

            </form>

        </Content>
        <Background></Background>
    </Container>
);

export default SignIn;