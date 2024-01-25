import { fireEvent, render, screen } from '@testing-library/react';

import LoginForm from '../components/LoginForm';
import { expect, it } from 'vitest';

describe('LoginForm', () => {
    it('Renders the login form with no errors shown', () => {
        render(<LoginForm />);
        const loginForm = screen.getByTestId('login-form');
        expect(loginForm).toHaveTextContent('Login');
        expect(loginForm).not.toHaveTextContent('Please enter your email');
        expect(loginForm).not.toHaveTextContent('Please enter a password');
        expect(loginForm).not.toHaveTextContent('Please enter a valid email');
        expect(loginForm).not.toHaveTextContent('The password must be 8 character or longer');
    });

    it('Shows an error when the email field is empty and Login button is clicked', () => {
        render(<LoginForm />);
        const loginForm = screen.getByTestId('login-form');
        const loginButton = screen.getByTestId('login-button');
        fireEvent.click(loginButton);
        expect(loginForm).toHaveTextContent('Please enter your email');
    });

    it('Shows an error when the passsword field is empty and Login button is clicked', () => {
        render(<LoginForm />);
        const loginForm = screen.getByTestId('login-form');
        const loginButton = screen.getByTestId('login-button');
        const emailField = screen.getByTestId('email-input');
        fireEvent.change(emailField, { target: { value: 'test@gmail.com' } });
        fireEvent.click(loginButton);
        expect(loginForm).toHaveTextContent('Please enter a password');
    });

    it('Shows an error when user enters an invalid email', () => {
        render(<LoginForm />);
        const loginForm = screen.getByTestId('login-form');
        const emailField = screen.getByTestId('email-input');
        const passwordField = screen.getByTestId('password-input');
        fireEvent.change(emailField, { target: { value: 'test' } });
        fireEvent.change(passwordField, { target: { value: 'password' } });
        expect(loginForm).toHaveTextContent('Please enter a valid email');
    });

    it('Shows an error when user enters a password that is too short', () => {
        render(<LoginForm />);
        const loginForm = screen.getByTestId('login-form');
        const emailField = screen.getByTestId('email-input');
        const passwordField = screen.getByTestId('password-input');
        fireEvent.change(emailField, { target: { value: 'test@gmail.com' } });
        fireEvent.change(passwordField, { target: { value: 'pass' } });
        expect(loginForm).toHaveTextContent('The password must be 8 character or longer');
    });

    it('Shows a success message when user enters valid email and password', async () => {
        render(<LoginForm />);
        const loginForm = screen.getByTestId('login-form');
        const emailField = screen.getByTestId('email-input');
        const passwordField = screen.getByTestId('password-input');
        const loginButton = screen.getByTestId('login-button');
        fireEvent.change(emailField, { target: { value: 'george.bluth@reqres.in' } });
        fireEvent.change(passwordField, { target: { value: 'password' } });
        fireEvent.click(loginButton);
        expect(await screen.findByText(/Login Successful/)).toBeInTheDocument();
    });

    it('Shows an error message when a user is not found', async () => {
        render(<LoginForm />);
        const loginForm = screen.getByTestId('login-form');
        const emailField = screen.getByTestId('email-input');
        const passwordField = screen.getByTestId('password-input');
        const loginButton = screen.getByTestId('login-button');
        fireEvent.change(emailField, { target: { value: 'test@gmail.com' } });
        fireEvent.change(passwordField, { target: { value: 'password' } });
        fireEvent.click(loginButton);
        expect(await screen.findByText(/user not found/)).toBeInTheDocument();
    });

});