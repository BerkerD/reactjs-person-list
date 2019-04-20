import React from 'react';

import './Person.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBuilding} from '@fortawesome/free-solid-svg-icons'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProfilePicture from "../Layout/ProfilePicture/ProfilePicture";

class Person extends React.Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const differentName = this.props.name !== nextProps.name;
        return differentName
    }

    render() {
        return <article className="Person" onClick={this.props.clicked}>
            <Container>
                <Row>
                    <Col>
                        <p style={{marginBottom: 0 + 'px', marginTop: 1 + 'rem'}}><b>{this.props.name}</b></p>
                        <div className="Organization-wrapper">
                            <FontAwesomeIcon className="Organization-icon" icon={faBuilding}/>
                            <p>{this.props.company}</p>
                        </div>
                    </Col>
                    <Col>
                        <ProfilePicture image={this.props.image} first_char={this.props.first_char} class={"Person-image"}/>
                    </Col>
                </Row>
            </Container>
        </article>
    }
}

export default Person;
