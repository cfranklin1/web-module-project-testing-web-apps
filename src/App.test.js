import React from 'react';
import { screen, render, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event';

import App from './App';
import ContactForm from './components/ContactForm';
import { renderSync } from 'sass';


test("contact form rendering", async () => {
    render(<ContactForm />);
});

test("name input test", async () => {
    render(<ContactForm />);

    const name = screen.queryByPlaceholderText("Edd");
    
    userEvent.type(name, "camille");

    expect(name).toHaveValue("camille");
    
});

test("header h1 element exists", async () => {
    render(<ContactForm />);

    const header = screen.getByText(/contact form/i);

    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/contact form/i);

})

test("renders message if user enters less than four characters in firstname field", async () => {
    render(<ContactForm />);

    const input = screen.queryByPlaceholderText("Edd");
    //const error = screen.queryByTestId('error');
    //const error = document.querySelector('[data-testid="error"]');
    userEvent.type(input, "cam");

    //await waitFor(() => screen.getByTestId('error'))

    expect(screen.getByTestId('error')).toHaveTextContent('firstName must have at least 5 characters.');
    //expect(error).toHaveTextContent(/must have at least 5 characters./i);
})

// test("user submits without filling in form", async () => {
//     render(<ContactForm />);

//     const submit = 
// })

test("invalid email input test", async () => {
    render(<ContactForm />);

    const email = screen.getByPlaceholderText("bluebill1049@hotmail.com");
    
    userEvent.type(email, "m&ms");

    expect(screen.getByTestId('error')).toHaveTextContent('email must be a valid email address.')
})


