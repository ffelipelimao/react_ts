import React, {useCallback, useRef} from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import getValidationErros from '../../utils/getValidationErros';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
        console.log(data)
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name:Yup.string().required('Nome obrigatorio'),
                email:Yup.string().required('Email obrigatorio').email('Digite um email valido'),
                password:Yup.string().min(6,'No minimo 6 digitos'),
            })

            await schema.validate(data, {
                abortEarly: false,
            });
           
        } catch (err) {

            const errors  = getValidationErros(err)
            formRef.current?.setErrors(errors); 
            console.log(err);
        }

    },[])

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="LogoGo" />

                <Form ref={formRef} onSubmit={handleSubmit} >
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