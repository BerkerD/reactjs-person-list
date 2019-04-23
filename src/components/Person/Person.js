import React from 'react';

import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProfilePicture from "../ProfilePicture/ProfilePicture";


const Person = (props) => {
    return (
        <div className="Person" onClick={props.clicked}>
            <Container>
                <Row>
                    <Col>
                        <p style={{ marginBottom: 0 + 'px', marginTop: 1 + 'rem' }}><b>{props.name}</b></p>
                        <div className="Organization-wrapper">
                            <FontAwesomeIcon className="Organization-icon" icon={faBuilding} />
                            <p>{props.company}</p>
                        </div>
                    </Col>
                    <Col>
                        <ProfilePicture image={props.image} first_char={props.first_char} class={"Person-image"} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Person;
