import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Modal.css';
import ProfilePicture from "../Layout/ProfilePicture/ProfilePicture";


class PersonModal extends React.Component {


    render() {
        return <Modal show={this.props.show} onHide={this.props.handleClose}
                      aria-labelledby="contained-modal-title-vcenter"
                      centered>
            <Modal.Header closeButton style={{backgroundColor: '#dee2e6'}}>
                <h6><b>Person Information</b></h6>
            </Modal.Header>
            <Modal.Body>
                <Container style={{marginBottom: 100 + 'px'}}>

                    <Row>
                        <Col>
                            <ProfilePicture image={this.props.image} first_char={this.props.first_char} class={"Person-image-modal"}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className="text-center"><b>{this.props.name}</b></p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p style={{color: 'green'}} className="text-center">+{this.props.phone}</p>
                        </Col>
                    </Row>

                    <hr></hr>

                    <Row style={{marginTop:30 + 'px'}}>
                        <Col md={4}>
                            <p className="float-right"><b>Email</b></p>
                        </Col>
                        <Col md={8}>
                            <p>{this.props.email}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <p className="float-right"><b>Organization</b></p>
                        </Col>
                        <Col md={8}>
                            <p> {this.props.organization} </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <p className="float-right"><b>Group</b></p>
                        </Col>
                        <Col md={8}>
                            <p>
                                {this.props.groups}
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <p className="float-right"><b>Location</b></p>
                        </Col>
                        <Col md={8}>
                            <p>
                                {this.props.location}
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <button type="button" className="btn btn-danger btn-block" onClick={this.props.onDelete}>Delete</button>
                        </Col>
                    </Row>

                </Container>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: '#dee2e6'}}>
                <Button variant="light" onClick={this.props.handleClose}>
                    Back
                </Button>
            </Modal.Footer>
        </Modal>
    }
}

export default PersonModal
