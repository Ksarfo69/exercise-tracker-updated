import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import Exercise from '../src/pages/exerciseLog'
import axios from 'axios'
import jestConfig from '../jest.config';



jest.mock('axios', ()=> ({
    __esModule: true,

    default: {
        get: () => ({
            data: [
                {
                    _id: 6,
                    user: "testuser",
                    exercise: "testexercise",
                    duration: "20",
                    date: "2022-09-18"
        
                }
            ]
        }),
        delete: jest.fn(),
    }
}));


describe(Exercise, ()=>{
    it("checks if the whole component has been rendered correctly", async ()=>{
        render(<Exercise user="testuser"/>)
        const parent = screen.getByTestId("container");
        const body = screen.getByTestId("body");
        expect(parent).toBeInTheDocument();
        expect(body).toBeInTheDocument();

        
        await waitFor(() => expect(body).toHaveTextContent("testuser"));
    })

    it('tests the delete exercise handler', async ()=>{
        render(<Exercise user="testuser"/>)
        const parent = screen.getByTestId("container");
        const body = screen.getByTestId("body");
        expect(parent).toBeInTheDocument();
        expect(body).toBeInTheDocument();

        
        await waitFor(() => expect(body).toHaveTextContent("testuser"));

        const deletebutton = screen.getByTestId("delete");
        expect(deletebutton).toHaveTextContent("Delete") 

        fireEvent.click(deletebutton)

        expect(axios.delete).toHaveBeenCalledTimes(1)

    })
})