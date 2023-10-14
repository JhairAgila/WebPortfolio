import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Header } from "../components/header/Header";
import userEvent from "@testing-library/user-event";
import { Contacts } from "../components/contacts/Contacts";

describe('Header testing', () => {
    beforeEach( () => {
        render(<Header/>)
    })

    it('Should exist href to guide to another page', async() => {
        render(<Contacts/>);
        const scrollDown = screen.getByText('Scroll Down')
        const contactSection = screen.getByTestId("contact");
        await userEvent.click(scrollDown);

        expect(contactSection).toBeInTheDocument();
    });

    it()


});