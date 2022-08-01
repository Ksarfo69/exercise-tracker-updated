import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/react'
import '@testing-library/jest-dom'
import NewExercise from '../src/components/newExercise'
import axios from 'axios'

jest.mock('axios')

describe(NewExercise, ()=>{
    it("checks if the whole component has been rendered correctly", ()=>{
        render(<NewExercise user="testuser" users={["test", "user"]}/>)
        const parent = screen.getByTestId("container");
        const user = screen.getByTestId("user");
        const username = screen.getByTestId("username");
        const exercise = screen.getByTestId("exercise");
        const duration = screen.getByTestId("duration");
        const date = parent.querySelector('#date')
        const button = screen.getByRole("button")
    
     
        expect(parent).toBeInTheDocument();
        expect(user).toHaveTextContent("Welcome, testuser")
        expect(username).toBeInTheDocument();
        expect(exercise).toBeInTheDocument()
        expect(duration).toBeInTheDocument()
        expect(date).toBeInTheDocument()
        expect(button).toBeInTheDocument()      
        
    })

    it('checks that the username, exercise, duration and date field changes', ()=>{
        render(<NewExercise user="testuser" users={["test", "user"]}/>)
        const parent = screen.getByTestId("container");
        const username = screen.getByTestId("username");
        const exercise = screen.getByTestId("exercise");
        const duration = screen.getByTestId("duration");
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
        render(<NewExercise user="testuser" users={["test", "user"]}/>)
        const parent = screen.getByTestId("container");
        const username = screen.getByTestId("username");
        const exercise = screen.getByTestId("exercise");
        const duration = screen.getByTestId("duration");
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
        expect(axios.post).toHaveBeenCalledTimes(1)
    })
})