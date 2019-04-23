import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Pagination = (props) => {

    return (
        <Container>
        <Row>
            <Col className="text-center">
            <Button variant="link" onClick={props.previousPage}><FontAwesomeIcon icon={faChevronLeft} /></Button>
            </Col>
            <Col  className="text-center">
            <p>Page: {props.currentPage}</p>
            </Col>
            <Col  className="text-center">
            <Button variant="link" onClick={props.nextPage}><FontAwesomeIcon icon={faChevronRight} /></Button>
            </Col>
        </Row>
    </Container>

    )
}

export default Pagination