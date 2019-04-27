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
        '72cb5f4871b990ea8829611f9ab85bbe722961df_formatted_address': "",
        '869937ae55130033aaf282aa7a027a588a6a2c48': "",
        result: 0
    }


    handleSubmit = event => {
    
        var form = event.target;
        event.preventDefault()

        axios.post("https://api.pipedrive.com/v1/persons?api_token=44f0803b7d92bcff53197ace84ccc3c4fd01c89d", {

            name: this.state.name,
            owner_id: this.state.owner_id,
            org_id: this.state.org_id,
            email: this.state.email,
            phone: this.state.phone,
            "72cb5f4871b990ea8829611f9ab85bbe722961df_formatted_address": this.state["72cb5f4871b990ea8829611f9ab85bbe722961df_formatted_address"],
            "869937ae55130033aaf282aa7a027a588a6a2c48": this.state["869937ae55130033aaf282aa7a027a588a6a2c48"]

        }).then(obj => {
            form.reset();
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

                    <Form.Group controlId="72cb5f4871b990ea8829611f9ab85bbe722961df_formatted_address">
                        <Form.Control type="text"
                            placeholder="Address"
                            value={this.state['72cb5f4871b990ea8829611f9ab85bbe722961df_formatted_address']}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="869937ae55130033aaf282aa7a027a588a6a2c48">
                        <Form.Control type="text"
                            placeholder="Groups"
                            value={this.state["869937ae55130033aaf282aa7a027a588a6a2c48"]}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Button variant="primary" className="btn-block mb-5" type="submit">Submit</Button>
                </Form>
                {this.state.result === 201 &&
                    <p class="text-center">Succesfully Created!</p>
                }

            </div>
        );
    }
}

export default AddPersonContainer;
