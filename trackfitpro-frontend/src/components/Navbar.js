import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'






function Navbarr (props) {

        return(
              <Navbar bg="primary" variant="dark"
              sticky="top" expand="sm" collapseOnSelect>
              <Navbar.Brand>
              <a style={{textDecoration: "none", color: "white"}} href="/">TrackFitPro</a>
              </Navbar.Brand>

              <Navbar.Toggle className="coloring" />
              <Navbar.Collapse>
                <Nav>
                  
                <Nav.Link href="/users/add">Create New User</Nav.Link>
                  <Nav.Link href="/exercises">Exercise Log</Nav.Link>
                <NavDropdown title={props.user} id="basic-nav-dropdown">
                  {
                    props.users.map(item => (
                      <NavDropdown.Item onClick={()=>props.setUser(item)}>{item}</NavDropdown.Item>
                    ))
                  }
                  </NavDropdown>
                  
                </Nav>
              </Navbar.Collapse>

              </Navbar>
        )
    }
    
    
    export default Navbarr;

