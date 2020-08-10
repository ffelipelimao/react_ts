import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import getValidationErros from '../../utils/getValidationErros';
import { Link, useHistory } from 'react-router-dom'

import { useToast } from '../../hooks/Toats'
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContainer } from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'


interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(async (data: SignUpFormData) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatorio'),
                email: Yup.string().required('Email obrigatorio').email('Digite um email valido'),
                password: Yup.string().min(6, 'No minimo 6 digitos'),
            })

            await schema.validate(data, {
                abortEarly: false,
            });

            await api.post('/users', data);

            history.push('/');

            addToast({
                type: 'sucess',
                title: 'Cadastro realizado',
                description: 'Voce ja pode fazer o logon'
            })

        } catch (err) {

            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErros(err)
                formRef.current?.setErrors(errors);
                return;
            }

            addToast({
                type: 'error',
                title: 'Erro no Cadastro',
                description: 'Ocorreu um erro ao fazer o cadastro, tente novamente'
            });
        }

    }, [addToast, history])

    return (
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="LogoGo" />

                    <Form ref={formRef} onSubmit={handleSubmit} >
                        <h1>Faça seu cadastro</h1>
                        <Input name="name" icon={FiUser} placeholder="Nome" />
                        <Input name="email" icon={FiMail} placeholder="Email" />
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                        <Button type="submit">Cadastrar</Button>

                    </Form>

                    <Link to="/">Voltar para logon
                <FiArrowLeft />
                    </Link>
                </AnimationContainer>
            </Content>
        </Container>
    )
};



export default SignUp;