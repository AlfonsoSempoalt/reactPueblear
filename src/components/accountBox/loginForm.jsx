import React, { useContext } from 'react';
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from './common';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);
    const [formValues, handleInputChange] = useForm({
        username: '',
        password: '',
    });
    let navigate = useNavigate();

    const { username, password } = formValues;
    const URL = 'http://localhost:3001/logIn';

    const handleSubmit = (e) => {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: username, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status==='success') {
                    navigate('/logged');
                }else{
                    alert('Wrong username or password');
                }
            });
    };

    return (
        <BoxContainer>
            <FormContainer>
                <Input
                    type='email'
                    placeholder='Email'
                    name='username'
                    value={username}
                    onChange={handleInputChange}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                />
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
            <Marginer direction='vertical' margin='1.6em' />
            <SubmitButton type='submit' onClick={handleSubmit}>
                Signin
            </SubmitButton>
            <Marginer direction='vertical' margin='1em' />
            <MutedLink>
                Don't have an accoun?{' '}
                <BoldLink onClick={switchToSignup}>Signup</BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}
