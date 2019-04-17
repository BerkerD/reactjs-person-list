import React, { Component } from 'react';
import PersonList from "./containers/PersonList/PersonList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonList/>
      </div>
    );
  }
}

export default App;
