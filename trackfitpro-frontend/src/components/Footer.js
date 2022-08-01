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

import './footer.css'

function Footer () {
    return(
        <div className="Row footerbox" data-testid="container">
            <div className="col-6 m-auto color" data-testid="info">
            <p>Exercise Tracker App 2021</p>
            </div>
            
        </div>
    )
}



export default Footer;