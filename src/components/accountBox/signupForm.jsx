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

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);
    const [formValues, handleInputChange] = useForm({
        username: '',
        password: '',
        age: '',
        location: '',
    });
    const { username, password, age, location } = formValues;
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: username,
                password,
                age,
                location,
            }),
        })
            .then((res) => res.json())
            .then((user) => {
                window.location.href = './';
            });
    };
    return (
        <BoxContainer>
            <FormContainer>
                <Input
                    type='text'
                    placeholder='Username'
                    name='username'
                    value={username}
                    onChange={handleInputChange}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    value={password}
                    name='password'
                    onChange={handleInputChange}
                />
                <Input
                    type='number'
                    placeholder='Age'
                    value={age}
                    name='age'
                    onChange={handleInputChange}
                />
                <Input
                    type='text'
                    placeholder='Location'
                    value={location}
                    name='location'
                    onChange={handleInputChange}
                />
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
            <SubmitButton type='submit' onClick={handleSubmit}>
                Sign up
            </SubmitButton>
            <Marginer direction='vertical' margin='1em' />
            <MutedLink href='#'>
                Already have an account?
                <BoldLink href='#' onClick={switchToSignin}>
                    Sign in
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}
