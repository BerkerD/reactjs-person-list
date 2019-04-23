import React from 'react'
import Person from '../Person/Person'

const PersonList = (props) => (

   props.people.filter(person => {
        return person.name.toLowerCase().indexOf(props.filterText.toLowerCase()) >= 0
    }).map((person, idx) => {
        return (
            <li key={person.id} onDragOver={() => props.onDragOver(idx)} className="Person-list-item">
                <div className="Drag"
                    draggable
                    onDragStart={e => props.onDragStart(e, idx)}
                    onDragEnd={() => props.onDragEnd()}>
                    <Person
                        name={person.name}
                        company={person.org_id.name}
                        first_char={person.first_char}
                        image={person.pictureId ? person.picture_id.pictures["128"] : undefined}
                        clicked={() => props.personSelectHandler(person.id)}
                    />
                </div>
            </li>
        )
    })
)

export default PersonList
