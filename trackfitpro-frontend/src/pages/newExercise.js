import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react'



function NewExercise (props) {
    
    const[exercise, setExercise] = useState('');
    const[duration, setDuration] = useState(0);
    const[date, setDate] = useState('');
  


 const userHandler = (e) => {
    props.setUser(e.target.value)
}

 const exerciseHandler = (e) => {
    setExercise(e.target.value)
}

const durationHandler = (e) => {
    setDuration(e.target.value)
}

const dateHandler = (e) => {
    setDate(e.target.value)
}

 const submitHandler = (e) => {
     e.preventDefault();

    const newlyadded = {
        user: props.user,
        exercise: exercise,
        duration: duration,
        date: date
    };
    
    axios.post('http://localhost:4000/exercises/add', newlyadded);

    window.location = '/'
}


        return (
		<div className="container" data-testid="container">
		 <h1 data-testid="user">Welcome, {props.user}</h1>
         <form className="form-box row" name ="completionstatus" onSubmit={submitHandler}>

		 	<label >User: </label>
             <select id="username" value = {props.user}  onChange={userHandler} data-testid="username">
                 {props.users.map(x => <option>{x}</option>)}
                
             </select>
             <br />

             <label>Exercise: </label>
             <input id = "exercise" type = 'text' value = {exercise} onChange={exerciseHandler} data-testid="exercise"/>
             <br/>

             <label>Date: </label>
             <DatePicker id = "date" selected = {date} onChange = {dateHandler} />
             <br/>

             <label>Duration(mins): </label>
             <input id = "duration" type = 'text' value = {duration} onChange={durationHandler} data-testid="duration"/>
             <br />
             <button className="btn btn-primary btn-lg ml-3"  type = "submit" >Add Exercise</button>
         </form>	


         
		</div>  
	);
}

export default NewExercise;