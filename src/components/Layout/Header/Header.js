import React from 'react';
import logo from '../../../assets/logo.png'
import './Header.css';


const Header = () => {
    return (
        <div className="Header-container">
            <img src={logo} className="App-logo" alt="logo"/>
        </div>
    )
};
export default Header;
