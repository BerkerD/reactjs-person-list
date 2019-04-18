import React, {Component} from 'react';
import axios from 'axios'
import Person from '../../components/Person/Person'
import Header from "../../components/Layout/Header/Header";
import './PersonList.css';
import ListGroup from 'react-bootstrap/ListGroup'


class PersonList extends Component {

    state = {
        persons: [],
        selectedPersonId: null
    };

    componentDidMount() {
        axios.get('https://api.pipedrive.com/v1/persons?start=0&api_token=44f0803b7d92bcff53197ace84ccc3c4fd01c89d')
            .then(response => {
                const result = response.data.data.slice(0, 5);
                this.setState({persons: result})
            });
    }

    render() {
        const persons = this.state.persons.map(person => {

            let avatar;
            if (person.picture_id != null) {
                avatar = person.picture_id.pictures["128"];
            }

            return <ListGroup>
                <ListGroup.Item>
                    <Person
                        key={person.id}
                        name={person.name}
                        company={person.org_id.name}
                        first_char={person.first_char}
                        image = {avatar}
                    />
                </ListGroup.Item>
            </ListGroup>
        });

        return (
            <div className="Wrapper">
                <Header/>
                <div className="Breadcrumb">
                    <h4 className="Breadcrumb-text"><b>People's List</b></h4>
                    <hr/>
                </div>
                {persons}
            </div>
        );
    }

}

export default PersonList;
