import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';





const Exercise = (props) => {

const [exercises, setExercises] = useState([])


useEffect(()=> {
const getExercises= async ()=>{
    const res =  await axios.get('http://localhost:4000/exercises')
    setExercises(res.data.filter(item => item.user==props.user))
}
getExercises()
}, [props.user])

const  deleteExercise = async(id) => {
  try{
    await axios.delete('http://localhost:4000/exercises/delete/' + id)

   setExercises(
    exercises.filter(item => item._id !== id)
  )
  }catch(err){
    console.log(err)
  }
  
}


  return(
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>User</th>
          <th>Exercise</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {exercises.map(item => (
        <tr>
        <td>{item.user}</td>
        <td>{item.exercise}</td>
        <td>{item.duration}</td>
        <td>{item.date.slice(0,10)}</td>
        <td> <button onClick={()=> window.location = `/exercises/${item._id}`}>Edit</button> || <button onClick={()=>deleteExercise(item._id)}>Delete</button></td>
      </tr>
      ))}   
      </tbody>
    </table>
  </div>)
};




export default Exercise



  

    

   
   