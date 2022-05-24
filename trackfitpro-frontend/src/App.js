import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navbarr from './components/Navbar'
import './app.css';
import NewUser from './components/newUser.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ExerciseLog from './components/exercise log';
import NewExercise from './components/newExercise';
import EditExercise from './components/edit exercise';
import axios from 'axios';

function App (){ 

	const[users, setUsers] = useState([]);
	const[user, setUser] = useState([]);
	
  
	useEffect(()=>{
	  const get = async() => {
		await axios.get('http://localhost:4000/users')
		.then(res => {
			if(res.data.length>0) {
			   setUsers(res.data.map(users => users.username));
			   setUser(res.data[0].username)
				}
			})
	}
	get()
	}, [])
	
        return (
			<BrowserRouter>
		<div className="container">
			<Navbarr user={user} users={users} setUser={setUser}/>
			
				<Routes>
					<Route exact path='/' element= {<NewExercise user={user} users={users} setUser={setUser}/>} />
					<Route path='/exercises' element = {<ExerciseLog user={user} users={users} setUser={setUser}/>} />
					<Route path='/users/add' element = {<NewUser/>} />
					<Route path='/exercises/:id' element = {<EditExercise user={user} users={users} setUser={setUser} setUsers={setUsers}/>} />
				</Routes>
			<br />
       		 <Footer/>
		
		</div>
		</BrowserRouter>  
	);
}

export default App;
