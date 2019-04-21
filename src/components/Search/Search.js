import React from 'react'
import './Search.css'
class Search extends React.Component {

    filterUpdate = () => {
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }

    render() {
        return (
            <form className="Search-form">
                <input
                    type="text"
                    className="Search-input"
                    ref={(value) => { this.myValue = value }}
                    placeholder="Type name to filter"
                    onChange={this.filterUpdate.bind(this)}>
                </input>
            </form>
        )
    }
}

export default Search