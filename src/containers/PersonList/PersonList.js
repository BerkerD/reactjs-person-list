import React, {Component} from 'react';
import axios from 'axios'
import Person from '../../components/Person/Person'
import Modal from "../../components/Modal/Modal";

import './PersonList.css';


class PersonList extends Component {

    state = {
        people: [],
        show: false,
        personDetails: {
            id: "",
            name: "",
            phone: "",
            email: "",
            organization: "",
            assistant: "",
            group: "",
            location: "",
            image: "",
            first_char: ""
        }
    };

    // Lifecycle Methods //

    componentDidMount() {
        this.getAllPeople()
    }

    // --------------------------- //


    // REST Functions //

    getAllPeople = () => {
            axios.get('https://api.pipedrive.com/v1/persons?start=0&api_token=44f0803b7d92bcff53197ace84ccc3c4fd01c89d')
            .then(response => {
                const result = response.data.data;
                this.setState({people: result});
            });
    };

    getPersonById = (id) => {
        axios.get('https://api.pipedrive.com/v1/persons/' + id + '?api_token=44f0803b7d92bcff53197ace84ccc3c4fd01c89d')
            .then(response => {
                const result = response.data.data;
                let avatar;
                if (result.picture_id != null) {
                    avatar = result.picture_id.pictures["128"];
                }
                this.setState(prevState => ({
                    personDetails: {
                        ...prevState.personDetails,
                        id: result.id,
                        name: result.name,
                        phone: result.phone[0].value,
                        email: result.email[0].value,
                        organization: result.org_id.name,
                        group: result["869937ae55130033aaf282aa7a027a588a6a2c48"],
                        location: result["72cb5f4871b990ea8829611f9ab85bbe722961df_formatted_address"],
                        image: avatar,
                        first_char: result.first_char
                    }
                }));
            });
    };

    deletePersonById = (id) => {
        axios.delete('https://api.pipedrive.com/v1/persons/' + id + '?api_token=44f0803b7d92bcff53197ace84ccc3c4fd01c89d')
            .then(response => {
            });
    };

    // --------------------------- //


    // Click Handler Functions //

    peopleSelectedHandler = (id) => {
        this.getPersonById(id);
        this.showModal();
    };

    personDeleteHandler = (id) => {
        this.deletePersonById(id);
        this.getAllPeople()
    };

    // --------------------------- //



    // Modal Functions //

    showModal = () => {
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };

    // --------------------------- //


    // Drag&Drop Methods //

    onDragStart = (e, index) => {
        this.draggedItem = this.state.people[index];
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDragOver = index => {
        const draggedOverItem = this.state.people[index];

        // if the item is dragged over itself, ignore
        if (this.draggedItem === draggedOverItem) {
            return;
        }

        // filter out the currently dragged item
        let people = this.state.people.filter(item => item !== this.draggedItem);

        // add the dragged item after the dragged over item
        people.splice(index, 0, this.draggedItem);

        this.setState({people});
    };

    onDragEnd = () => {
        this.draggedIdx = null;
    };

    // -------------------------------------//



    render() {

        const person = this.state.people.map((person, idx) => {

            let avatar;
            if (person.picture_id != null) {
                avatar = person.picture_id.pictures["128"];
            }
            return <li key={person.id} onDragOver={() => this.onDragOver(idx)} className="Person-list-item">
                <div className="Drag"
                     draggable
                     onDragStart={e => this.onDragStart(e, idx)}
                     onDragEnd={this.onDragEnd}>
                    <Person
                        name={person.name}
                        company={person.org_id.name}
                        first_char={person.first_char}
                        image={avatar}
                        clicked={() => this.peopleSelectedHandler(person.id)}
                    />
                </div>
            </li>
        });

        return (
            <div>
                <Modal
                    show={this.state.show}
                    handleClose={this.hideModal}
                    name={this.state.personDetails.name}
                    email={this.state.personDetails.email}
                    phone={this.state.personDetails.phone}
                    organization={this.state.personDetails.organization}
                    groups={this.state.personDetails.group}
                    location={this.state.personDetails.location}
                    image={this.state.personDetails.image}
                    first_char={this.state.personDetails.first_char}
                    onDelete={() => this.personDeleteHandler(this.state.personDetails.id)}
                />
                <ul style={{padding: 0}}>
                    {person}
                </ul>
            </div>
        );
    }

}

export default PersonList;
