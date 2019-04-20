import React from 'react'
import './ProfilePicture.css'

const ProfilePicture = (props) => {

    return (
        props.image ? <img src={props.image} height="50" width="50" className={props.class} alt="avatar"/> :
            <svg height="50" width="50" className={props.class}>
                <rect fill={getRandomColor()} x="0" y="0" height="50" width="50"/>
                <text fill="#ffffff" fontSize="20" textAnchor="middle" x="25"
                      y="30">{props.first_char.toUpperCase()}</text>
            </svg>
    )
};


const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export default ProfilePicture
