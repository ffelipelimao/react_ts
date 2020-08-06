import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="LogoGo" />

            <form >
                <h1>Faça seu logon</h1>
                <Input name="email" icon={FiMail} placeholder="Email" />
                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                <Button type="submit">Entrar</Button>

            </form>

            <a href="Forgot">Esqueci minha senha
                <FiLogIn />
            </a>

        </Content>
        <Background></Background>
    </Container>
);

export default SignIn;