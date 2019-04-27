import React, { Component } from 'react';
import axios from 'axios';
import PersonList from "../../components/PersonList/PersonList"
import Search from "../../components/Search/Search"
import './PersonListContainer.css';
import Breadcrumb from "../../components/Layout/Breadcrumb/Breadcrumb"
import PersonDetailsModal from "../../components/Modal/PersonDetailsModal/PersonDetailsModal"
import Pagination from '../../components/Pagination/Pagination';


class PersonContainer extends Component {

    state = {
        totalPage: null,
        currentPage: 0,
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

    componentDidMount = () => {
        this.getAllPeople()
    }

    calculateTotalPageNumber = (personList) => {
        const totalPage = personList.length / 5;
        this.setState({ totalPage: totalPage })
    }

    filterUpdate = (value) => {
        this.setState({
            filterText: value
        })
    }

    getAllPeople = () => {
        axios.get('https://api.pipedrive.com/v1/persons?start=0&api_token=44f0803b7d92bcff53197ace84ccc3c4fd01c89d')
            .then(response => {
                const result = response.data.data;
                this.calculateTotalPageNumber(result)
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

    personSelectHandler = (id) => {
        this.getPersonById(id);
        setTimeout(this.showModal, 100);
    };

    personDeleteHandler = (id) => {
        this.deletePersonById(id);
    };

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

        this.setState({ people })
    };

    onDragEnd = () => {
        this.draggedIdx = null;
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    previousPage = () => {
        if (this.state.currentPage !== 0)
            this.setState((prevState) => ({ currentPage: (prevState.currentPage - 1) }))
    }

    nextPage = () => {
        if (this.state.currentPage + 1 < this.state.totalPage)
            this.setState((prevState) => ({ currentPage: (prevState.currentPage + 1) }))

    }


    render() {

        return (
            <div>
                <Breadcrumb title={"People's List"} />
                <Search filterUpdate={this.filterUpdate.bind(this)} />
                <ul style={{ padding: 0 }}>
                    <PersonList
                        currentPage={this.state.currentPage}
                        people={this.state.people}
                        filterText={this.state.filterText}
                        personSelectHandler={this.personSelectHandler}
                        onDragStart={this.onDragStart}
                        onDragEnd={this.onDragEnd}
                        onDragOver={this.onDragOver}
                    />
                </ul>
                <PersonDetailsModal
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

                <Pagination
                    previousPage={this.previousPage}
                    nextPage={this.nextPage}
                    currentPage={this.state.currentPage}
                />


            </div>
        );
    }
}

export default PersonContainer;
