import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//eslint-disable-next-line
import Button from 'react-bootstrap/Button';
//eslint-disable-next-line
import Container from 'react-bootstrap/Container';
//eslint-disable-next-line
import Row from 'react-bootstrap/Row';
//eslint-disable-next-line
import Col from 'react-bootstrap/Col';
import axios from 'axios';


class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: 0,
            users: []
        }

    this.usernameHandler = this.usernameHandler.bind(this);
    this.ageHandler = this.ageHandler.bind(this);    
    }


    usernameHandler = (e) => {
        this.setState({username: e.target.value})
    }

    ageHandler = (e) => {
        this.setState({age: e.target.value})
    }

    addUser = (e) => {
        const newUser = {
            username : this.state.username,
            age : this.state.age
        }
        axios.post('http://localhost:4000/users/add', newUser)
    }


    render() {

       
        return (
            <div className="container" data-testid="container">
            <form className="form-box row" name ="completionstatus" onSubmit={this.addUser}>

            <label>Username: </label>
            <input id = "newuser" type = 'text' value = {this.state.username} onChange={this.usernameHandler}/>
            <br />

            <label>Age: </label>
            <input id = "age" type = 'text' value = {this.state.age} onChange={this.ageHandler}/>
            <br/>

        
            <button className="btn btn-primary btn-lg ml-3"  type = "submit" >Add User</button>
        </form>
        </div>
        )
    }
}

export default NewUser;