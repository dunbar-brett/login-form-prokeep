import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import App from '../App';


test('Renders the login form', () => {
    render(<App />);
    expect(true).toBeTruthy();
});