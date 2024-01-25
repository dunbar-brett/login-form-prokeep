import { render, screen } from '@testing-library/react';

import LoginForm from '../components/LoginForm';

describe('LoginForm', () => {
    it('Renders the login form', () => {
        render(<LoginForm />);
        expect(screen.getByTestId('header')).toHaveTextContent('Login');
    });
});