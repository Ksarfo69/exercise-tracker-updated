import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import {useState, useLayoutEffect} from 'react';



function EditExercise (props){

    const {id} = useParams();

    

    const[exercise, setExercise] = useState('');
    const[duration, setDuration] = useState('');
    const[date, setDate] = useState(new Date());
    


    useLayoutEffect( () => {
        const fetchinfo = async() => {
            try{
            const res = await axios.get('http://localhost:4000/users')
            if(res.data.length>0) {
                props.setUsers(res.data.map(users => users.username));
            }
            const exercises = await axios.get('http://localhost:4000/exercises/' + id)
            props.setUser(exercises.data.user);
            setExercise(exercises.data.exercise);
            setDuration(exercises.data.duration);
            setDate(new Date(exercises.data.date));

        }catch(err){
            console.log(err)
        }
    }

    fetchinfo()
},[props.user])

  
       
       
    


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

 const submitHandler = async (e) => {
     e.preventDefault();

    const newlyadded = {
        user: props.user,
        exercise: exercise,
        duration: duration,
        date: date
    };
    await axios.put('http://localhost:4000/exercises/edit/' + id, newlyadded);

    window.location = '/exercises'
}

        return (
		<div className="container" data-testid="container">
		 <h1 data-testid="user">Edit your exercise, {props.user}</h1>
         <form className="form-box row" name ="completionstatus" onSubmit={submitHandler}>

		 	<label >User: </label>
             <select id="username" value = {props.user} onChange={userHandler}>
             {props.users.map(x => <option>{x}</option>)}
             </select>
             <br />

             <label>Exercise: </label>
             <input id = "exercise" type = 'text' value = {exercise} onChange={exerciseHandler}/>
             <br/>

             <label>Date: </label>
             <DatePicker id = "date" selected = {date} onChange = {dateHandler}/>
             <br/>

             <label>Duration(mins): </label>
             <input id = "duration" type = 'text' value = {duration} onChange={durationHandler}/>
             <br />
             <button className="btn btn-primary btn-lg ml-3"  type = "submit" >Edit Exercise</button>
         </form>	


         
		</div>  
	);
}

export default EditExercise;