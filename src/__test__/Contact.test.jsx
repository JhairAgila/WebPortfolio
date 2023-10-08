/** @jest-environment jsdom */

import React from 'react';
import {cleanup, fireEvent, render, screen, waitFor} from '@testing-library/react'
import { Contacts } from '../components/contacts/Contacts';
import  userEvent  from '@testing-library/user-event';
import { ContactMock, ContactMockError } from '../__mocks__/Contact.mock';




describe('It is a project', () => {
    afterAll(cleanup);
    beforeEach( () => {
        render(<Contacts/>)
    })
    it('Count two inputs, one textArea and one submit button', async() => {
        const nameInput = await screen.findByPlaceholderText('Your Full Name');
        const emailInput = await screen.findByPlaceholderText('Your email');
        const messageTextArea =  await screen.findByPlaceholderText("Your message");
        const submitInput = screen.getByRole('button', {name: /Send Message/i});
        expect(nameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(messageTextArea).toBeInTheDocument();
        expect(submitInput).not.toBeDisabled();
        // screen.debug();
    });

    it('Should be able to send values', async() => {
        const nameInput = await screen.findByPlaceholderText('Your Full Name');
        const emailInput = await screen.findByPlaceholderText('Your email');
        const messageTextArea =  await screen.findByPlaceholderText("Your message");
        const submitInput = screen.getByRole('button', {name: /Send Message/i});

        await userEvent.type(nameInput, ContactMock.fullname)
        await userEvent.type(emailInput, ContactMock.email)
        await userEvent.type(messageTextArea, ContactMock.message);
        await userEvent.click(submitInput);

        await waitFor( () => {
            expect(nameInput).toHaveValue('');
            expect(emailInput).toHaveValue('');
            expect(messageTextArea).toHaveValue('');
        });
    });

    // it('Should not be able to send values', async() => {
    //     // const submitFuction = jest.fn();
    //     const nameInput = await screen.findByPlaceholderText('Your Full Name');
    //     const emailInput = await screen.findByPlaceholderText('Your email');
    //     const messageTextArea =  await screen.findByPlaceholderText("Your message");
    //     const submitInput = screen.getByRole('button', {name: /Send Message/i});

    //     await userEvent.type(nameInput, ContactMockError.fullname)
    //     await userEvent.type(emailInput, ContactMockError.email)
    //     // await userEvent.type(messageTextArea, ContactMockError.message);
    //     await userEvent.click(submitInput);
    //     // expect(fireEvent.click(submitInput)).noy.toHaveReturned();
    //     // await userEvent.click(submitInput);

    //     await waitFor( () => {
    //         // screen.debug();
    //         const errorMessage = screen.getByText('Please fill out this field.')
    //         expect(errorMessage).toBeInTheDocument();
    //         // expect(messageTextArea).toBeNaN();
    //     });
    // });
})