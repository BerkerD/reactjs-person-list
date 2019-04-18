import React from 'react';

import './Person.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBuilding} from '@fortawesome/free-solid-svg-icons'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


const person = (props) => (

    <article className="Person" onClick={props.click}>
        <Container>
            <Row>
                <Col>
                    <p style={{marginBottom: 0 + 'px', marginTop: 1 + 'rem'}}><b>{props.name}</b></p>
                    <div className="Organization-wrapper">
                        <FontAwesomeIcon className="Organization-icon" icon={faBuilding}/><p>{props.company}</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        {
                            props.image ?
                                <img src={props.image} height="50" width="50" className="Person-image"/>
                                : <svg height="50" width="50" className="Person-image">
                                    <rect fill={getRandomColor()} x="0" y="0" height="50" width="50"/>
                                    <text
                                        fill="#ffffff"
                                        fontSize="20"
                                        textAnchor="middle"
                                        x="25"
                                        y="30">{props.first_char.toUpperCase()}</text>
                                </svg>

                        }
                    </div>
                </Col>
            </Row>
        </Container>
    </article>
);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export default person;
