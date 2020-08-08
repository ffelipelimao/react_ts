import React, {useCallback, useRef, useContext} from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import {Form} from '@unform/web'
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import getValidationErros from '../../utils/getValidationErros';

import {useAuth} from '../../context/Auth';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'

interface SignInFormData{
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    
    const formRef = useRef<FormHandles>(null);

    const {signIn} = useAuth();

    const handleSubmit = useCallback(async (data: SignInFormData) => {
          console.log(data)
          try {
              formRef.current?.setErrors({});
              const schema = Yup.object().shape({
                  email:Yup.string().required('Email obrigatorio').email('Digite um email valido'),
                  password:Yup.string().required('Senha obrigaria'),
              })
  
              await schema.validate(data, {
                  abortEarly: false,
              });
              signIn({
                  email: data.email,
                  password: data.password,
              });
          } catch (err) {
  
              const errors  = getValidationErros(err)
              formRef.current?.setErrors(errors); 
              console.log(err);
          }
  
      },[signIn]);
  
    
    return (
    <Container>
        <Content>
            <img src={logoImg} alt="LogoGo" />

            <Form ref={formRef} onSubmit={handleSubmit} >
                <h1>Faça seu logon</h1>
                <Input name="email" icon={FiMail} placeholder="Email" />
                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                <Button type="submit">Entrar</Button>

            </Form>

            <a href="Forgot">Esqueci minha senha
                <FiLogIn />
            </a>

        </Content>
        <Background />
    </Container>
    )
}

export default SignIn;