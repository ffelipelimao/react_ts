import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp: React.FC = () => {

    function handleSubmit(data: object): void {
        console.log(data)

    }

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="LogoGo" />

                <Form onSubmit={handleSubmit} >
                    <h1>Faça seu cadastro</h1>
                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="Email" />
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>

                </Form>

                <a href="Forgot">Voltar para logon
                <FiArrowLeft />
                </a>

            </Content>
        </Container>
    )
};



export default SignUp;