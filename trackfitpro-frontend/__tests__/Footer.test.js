import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../src/components/Footer'


describe(Footer, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<Footer/>)
        const parent = screen.getByTestId("container");
        const info = screen.getByTestId("info");
    
     
        expect(parent).toBeInTheDocument();
        expect(info).toHaveTextContent("Exercise Tracker App 2021")
      
        
    })
})