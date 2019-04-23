import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Modal.css';
import ProfilePicture from "../ProfilePicture/ProfilePicture";





const PersonModal = (props) => {

    return (

        <Modal show={props.show} onHide={props.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>

            <Modal.Header closeButton style={{ backgroundColor: '#dee2e6' }}>
                <h6><b>Person Information</b></h6>
            </Modal.Header>

            <Modal.Body>
                <Container style={{ marginBottom: 100 + 'px' }}>

                    <Row>
                        <Col>
                            <ProfilePicture image={props.image} first_char={props.first_char} class={"Person-image-modal"} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className="text-center"><b>{props.name}</b></p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p style={{ color: 'green' }} className="text-center">+{props.phone}</p>
                        </Col>
                    </Row>

                    <hr />

                    <Row style={{ marginTop: 30 + 'px' }}>
                        <Col md={4}>
                            <p className="float-right"><b>Email</b></p>
                        </Col>
                        <Col md={8}>
                            <p>{props.email}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <p className="float-right"><b>Organization</b></p>
                        </Col>
                        <Col md={8}>
                            <p> {props.organization} </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <p className="float-right"><b>Group</b></p>
                        </Col>
                        <Col md={8}>
                            <p>
                                {props.groups}
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <p className="float-right"><b>Location</b></p>
                        </Col>
                        <Col md={8}>
                            <p>
                                {props.location}
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <button type="button" className="btn btn-danger btn-block" onClick={() => { props.onDelete(); props.handleClose() }}>Delete</button>
                        </Col>
                    </Row>

                </Container>
            </Modal.Body>

            <Modal.Footer style={{ backgroundColor: '#dee2e6' }}>
                <Button variant="light" onClick={props.handleClose}>
                    Back
            </Button>
            </Modal.Footer>

        </Modal>
    )

}


export default PersonModal
