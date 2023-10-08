import React from 'react';
import { render, screen } from "@testing-library/react"
import { About } from "../components/about/About"

describe('About testing', () => {
    beforeEach( () => {
        render(<About/>)
    });

    it('Get image', () => {
        const imageMe = screen.getByAltText('About');
        expect(imageMe).toBeInTheDocument();
    })
})