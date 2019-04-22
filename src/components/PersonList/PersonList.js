import React from 'react'
import Person from '../Person/Person'

class PersonList extends React.Component {

    onDragStart = (e, index) => {
        this.draggedItem = this.props.people[index];
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDragOver = index => {
        const draggedOverItem = this.props.people[index];

        // if the item is dragged over itself, ignore
        if (this.draggedItem === draggedOverItem) {
            return;
        }

        // filter out the currently dragged item
        let people = this.props.people.filter(item => item !== this.draggedItem);

        // add the dragged item after the dragged over item
        people.splice(index, 0, this.draggedItem);

        this.peopleUpdate(people);
    };

    onDragEnd = () => {
        this.draggedIdx = null;
    };

    // update the people array state inside of the PersonList container
    peopleUpdate = (people) => {
        this.props.peopleUpdate(people)
    }

    render() {

        const person = this.props.people
            .filter(person => {
                return person.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0
            }).map((person, idx) => {
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
                                clicked={() => this.props.personSelectHandler(person.id)}
                            />
                        </div>
                    </li>
                )
            })


        return (
            <div>
                {person}
            </div>

        )
    }


}

export default PersonList