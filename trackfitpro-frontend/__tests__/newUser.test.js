import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import NewUser from '../src/pages/newUser'
import axios from 'axios'

jest.mock('axios')

describe(NewUser, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<NewUser/>)
        const parent = screen.getByTestId("container");
        const username = parent.querySelector('#newuser');
        const age = parent.querySelector('#age');
        const button = screen.getByRole("button")
    
     
        expect(parent).toBeInTheDocument();
        expect(username).toBeInTheDocument();
        expect(age).toBeInTheDocument()
        expect(button).toBeInTheDocument()      
        
    })

    it('checks that the username and age field changes', ()=>{
        render(<NewUser/>)
        const parent = screen.getByTestId("container");
        const username = parent.querySelector('#newuser');
        const age = parent.querySelector('#age');
    
     
        expect(parent).toBeInTheDocument();

        //test change username
        expect(username).toBeInTheDocument();
        fireEvent.change(username, {target: {value: "testusername"}})
        expect(username.value).toBe("testusername")
        
      
        //test change age
        expect(age).toBeInTheDocument()
        fireEvent.change(age, {target: {value: "20"}})
        expect(age.value).toBe("20")

    })

    it("pressing the submit button calls the submit handler", ()=>{
        render(<NewUser />)
        const parent = screen.getByTestId("container");
        const username = parent.querySelector('#newuser');
        const age = parent.querySelector('#age');
        const button = screen.getByRole("button")
    
     
        expect(parent).toBeInTheDocument();

        //test change username
        expect(username).toBeInTheDocument();
        fireEvent.change(username, {target: {value: "testusername"}})
        expect(username.value).toBe("testusername")
        
      
        //test change age
        expect(age).toBeInTheDocument()
        fireEvent.change(age, {target: {value: "20"}})
        expect(age.value).toBe("20")

        //click submit handler
        fireEvent.click(button)
        expect(axios.post).toHaveBeenCalledTimes(1)
    })
})