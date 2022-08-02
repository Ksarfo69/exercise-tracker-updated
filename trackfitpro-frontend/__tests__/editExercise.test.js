import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import EditExercise from '../src/pages/editExercise'
import axios from 'axios'




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
        put: jest.fn(),
    }
}));


describe(EditExercise, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<EditExercise user="testuser" users={["test", "user"]}/>)
        const parent = screen.getByTestId("container");
        const user = screen.getByTestId("user");
        const username = parent.querySelector("#username");
        const exercise = parent.querySelector("#exercise");
        const duration = parent.querySelector("#duration");
        const date = parent.querySelector('#date')
        const button = screen.getByRole("button")
    
     
        expect(parent).toBeInTheDocument();
        expect(user).toHaveTextContent("Edit your exercise, testuser")
        expect(username).toBeInTheDocument();
        expect(exercise).toBeInTheDocument()
        expect(duration).toBeInTheDocument()
        expect(date).toBeInTheDocument()
        expect(button).toBeInTheDocument()      
        
    })

    it('checks that the username, exercise, duration and date field changes', ()=>{
        render(<EditExercise user="testuser" users={["test", "user"]}/>)
        const parent = screen.getByTestId("container");
        const username = parent.querySelector("#username");
        const exercise = parent.querySelector("#exercise");
        const duration = parent.querySelector("#duration");
        const date = parent.querySelector('#date')
    
     
        expect(parent).toBeInTheDocument();

        //test change username
        expect(username).toBeInTheDocument();
        expect(username).toHaveTextContent("testuser")
        
      

        //test change exercise
        expect(exercise).toBeInTheDocument()
        fireEvent.change(exercise, {target: {value: "this is a test exercise"}})
        expect(exercise.value).toBe("this is a test exercise")

        //test change duration
        expect(duration).toBeInTheDocument()
        fireEvent.change(duration, {target: {value: "180"}})
        expect(duration.value).toBe("180")

        //test change date
        expect(date).toBeInTheDocument()
        fireEvent.change(date, {target: {value: '20220901'}})
        expect(date.value).toBe('20220901')

        
    })

    it("pressing the submit button calls the submit handler", ()=>{
        render(<EditExercise user="testuser" users={["test", "user"]}/>)
        const parent = screen.getByTestId("container");
        const username = parent.querySelector("#username");
        const exercise = parent.querySelector("#exercise");
        const duration = parent.querySelector("#duration");
        const date = parent.querySelector('#date')
        const button = screen.getByRole("button")
    
     
        expect(parent).toBeInTheDocument();

        //test change username
        expect(username).toBeInTheDocument();
        expect(username).toHaveTextContent("testuser")
        
      

        //test change exercise
        expect(exercise).toBeInTheDocument()
        fireEvent.change(exercise, {target: {value: "this is a test exercise"}})
        expect(exercise.value).toBe("this is a test exercise")

        //test change duration
        expect(duration).toBeInTheDocument()
        fireEvent.change(duration, {target: {value: "180"}})
        expect(duration.value).toBe("180")

        //test change date
        expect(date).toBeInTheDocument()
        fireEvent.change(date, {target: {value: '20220901'}})
        expect(date.value).toBe('20220901')

        //click submit handler
        fireEvent.click(button)
        expect(axios.put).toHaveBeenCalledTimes(1)
    })
})