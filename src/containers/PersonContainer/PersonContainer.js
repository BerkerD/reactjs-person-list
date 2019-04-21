import React, {Component} from 'react';
import axios from 'axios'
import Person from '../../components/Person/Person'
import Modal from "../../components/Modal/Modal";
import Search from "../../components/Search/Search"

import './PersonContainer.css';


class PersonList extends Component {

    state = {
        filterText: '',
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

    filterUpdate = (value) => {
        this.setState({
            filterText: value
        })
    }

    // Lifecycle Methods //

    componentDidMount = () => {
        this.getAllPeople()
    }

    // --------------------------- //


    // REST Functions //

    getAllPeople = () => {
        axios.get('https://api.pipedrive.com/v1/persons?start=0&api_token=44f0803b7d92bcff53197ace84ccc3c4fd01c89d')
            .then(response => {
                const result = response.data.data;
                this.setState({
                    people: result,
                });
            });
    };

    getPersonById = (id) => {
        axios.get('https://api.pipedrive.com/v1/persons/' + id + '?api_token=44f0803b7d92bcff53197ace84ccc3c4fd01c89d')
            .then(response => {
                const result = response.data.data;
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
                        image: result.picture_id ? result.picture_id.pictures["128"] : undefined,
                        first_char: result.first_char
                    }
                }));
            });
    };

    deletePersonById = (id) => {
        axios.delete('https://api.pipedrive.com/v1/persons/' + id + '?api_token=44f0803b7d92bcff53197ace84ccc3c4fd01c89d')
            .then(response => {
                if (response) {
                    this.getAllPeople()
                }
            });
    };

    // --------------------------- //


    // Handler Functions //

    peopleSelectedHandler = (id) => {
        this.getPersonById(id);
        setTimeout(this.showModal, 100);
    };

    personDeleteHandler = (id) => {
        this.deletePersonById(id);
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
        const person = this.state.people
            .filter(person => {
                return person.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
            })
        .map((person, idx) => {
            return (
                <li key={person.id} onDragOver={() => this.onDragOver(idx)} className="Person-list-item">
                    <div className="Drag"
                         draggable
                         onDragStart={e => this.onDragStart(e, idx)}
                         onDragEnd={this.onDragEnd}>
                        <Person
                            name={person.name}
                            company={person.org_id.name}
                            first_char={person.first_char}
                            image={person.pictureId ? person.picture_id.pictures["128"] : undefined}
                            clicked={() => this.peopleSelectedHandler(person.id)}
                        />
                    </div>
                </li>
            )
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
                <Search
                    filterText = {this.state.filterText }
                    filterUpdate = {this.filterUpdate.bind(this)}
                />
                <ul style={{padding: 0}}>
                    {person}
                </ul>
            </div>
        );
    }

}

export default PersonList;