import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Navbarr from '../src/components/Navbar'


// jest.mock(props, () => ({
//     __esModule: true,

//     default: ["Kwame", "Adu"],
// }));

describe(Navbarr, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Navbarr users={["test", "user"]} user="test"/>)
        const parent = screen.getByTestId("container");
        const brand = screen.getByTestId("brand");
        const dropdown = screen.getByTestId("dropdown")
     
        expect(parent).toBeInTheDocument();
        expect(parent).toHaveTextContent("Create New User")
        expect(parent).toHaveTextContent("Exercise Log")
        expect(brand).toHaveTextContent("TrackFitPro")
        expect(dropdown).toHaveTextContent("test")
        
    })
})