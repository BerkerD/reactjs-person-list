import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import axios from 'axios'
import Breadcrumb from "../../components/Layout/Breadcrumb/Breadcrumb"


class AddPersonContainer extends Component {

    state = {
        name: "",
        owner_id: "",
        org_id: "",
        email: "",
        phone: "",
        'f7c0a3852659c783f10cce7104c3f6a6daf5c3dc_formatted_address': "",
        '4d714c639922b8a5a22db835564884bec686722d': "",
        result: null
    }

    handleReset = () => {
        this.setState(prevState => ({
            ...prevState,
            name: "",
            owner_id: "",
            org_id: "",
            email: "",
            phone: "",
            'f7c0a3852659c783f10cce7104c3f6a6daf5c3dc_formatted_address': "",
            '4d714c639922b8a5a22db835564884bec686722d': ""
        }))
    }

    handleSubmit = event => {
        document.getElementById("addForm").reset();
        event.preventDefault()
        axios.post("https://api.pipedrive.com/v1/persons?api_token=44f0803b7d92bcff53197ace84ccc3c4fd01c89d", {

            name: this.state.name,
            owner_id: this.state.owner_id,
            org_id: this.state.org_id,
            email: this.state.email,
            phone: this.state.phone,
            "f7c0a3852659c783f10cce7104c3f6a6daf5c3dc_formatted_address": this.state["f7c0a3852659c783f10cce7104c3f6a6daf5c3dc_formatted_address"],
            "4d714c639922b8a5a22db835564884bec686722d": this.state["4d714c639922b8a5a22db835564884bec686722d"]
        }).then(obj => {
            console.log(obj)
            this.setState({ result: obj.status })
        })

    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Breadcrumb title={"Add Person"} />
                <Form onSubmit={this.handleSubmit} id="addForm">
                    <Form.Group controlId="name">
                        <Form.Control type="text"
                            placeholder="Enter name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="owner_id">
                        <Form.Control type="text"
                            placeholder="Owner_id"
                            value={this.state.owner_id}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="org_id">
                        <Form.Control type="text"
                            placeholder="Org_id"
                            value={this.state.org_id}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Control type="email"
                            placeholder="E-mail"
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Control type="text"
                            placeholder="Phone"
                            value={this.state.phone}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="f7c0a3852659c783f10cce7104c3f6a6daf5c3dc_formatted_address">
                        <Form.Control type="text"
                            placeholder="Address"
                            value={this.state['f7c0a3852659c783f10cce7104c3f6a6daf5c3dc_formatted_address']}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="4d714c639922b8a5a22db835564884bec686722d">
                        <Form.Control type="text"
                            placeholder="Groups"
                            value={this.state["4d714c639922b8a5a22db835564884bec686722d"]}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Button variant="primary" className="btn-block mb-5" type="submit">Submit</Button>
                </Form>
                {this.state.result === 201 &&
                    <p className="text-center">Succesfully Created!</p>
                }
                <Button variant="primary" className="btn-block mb-5" onClick={this.handleReset}>Reset Form</Button>
            </div>
        );
    }
}

export default AddPersonContainer;
