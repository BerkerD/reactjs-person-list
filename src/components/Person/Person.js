import React from 'react';

import './Person.css';

const person = (props) => (

    <article className = "Person" onClick={props.click}>
        <h5>{props.name}</h5>
        <h6>{props.company}</h6>
    </article>
);

export default person;
