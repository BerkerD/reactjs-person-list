import React, {Component} from 'react';
import axios from 'axios'
import Person from '../../components/Person/Person'
import Header from "../../components/Layout/Header/Header";

class PersonList extends Component {

    state = {
        persons: [],
        selectedPersonId: null
    };

    componentDidMount() {
        axios.get('https://api.pipedrive.com/v1/persons?start=0&api_token=44f0803b7d92bcff53197ace84ccc3c4fd01c89d')
            .then(response => {
                const result = response.data.data;
                this.setState({persons: result})
            });
    }

    render() {
        const persons = this.state.persons.map(person => {
            return <Person
                key={person.id}
                name={person.name}
                company = {person.org_id.name}
            />
        });
        console.log(persons);
        return (
          <div>
              <Header/>
              <section className="Persons">
                  {persons}
              </section>
          </div>
        );
    }

}

export default PersonList;
