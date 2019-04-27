import React from 'react';
import logo from '../../../assets/logo.png'
import './Header.css';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="Header-container">
            <Link to='/'><img src={logo} className="App-logo" alt="logo"/></Link>
            <Link to='/newperson'><Button variant="primary" className="float-right m-3" type="submit">Add Person</Button></Link>
        </div>
    )
};
export default Header;
