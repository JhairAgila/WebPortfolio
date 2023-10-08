import React from "react";
import { render, screen } from "@testing-library/react"
import { CTA } from "../components/header/CTA";
import userEvent from "@testing-library/user-event";
import { Contacts } from "../components/contacts/Contacts";

describe('CTA testing', () => {

    beforeEach( () => {
        render(<CTA/>)
    })
    it('Testting download file', async() => {
        const file = screen.getByText('Download CV');
        expect(file).toBeInTheDocument();
        expect(file).toHaveAttribute("download");
        await userEvent.click(file);
    });

    it('Testing Lets talk link', async() => {
        render(<Contacts/>);
        const contactSection = screen.getByTestId("contact");
        const contactLink = screen.getByText("Let's talk");
        expect(contactLink).toBeInTheDocument();
        expect(contactSection).toBeInTheDocument();
        await userEvent.click(contactLink);
        expect
    })

})