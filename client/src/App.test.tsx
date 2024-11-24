import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('client side basic test', () =>{

  test('renders login page', () => {
    render(<App />);
    const SignInBottom = screen.getByTestId("sign-in-testing");
    expect(SignInBottom).toBeInTheDocument();
  });


});
