import React, { Component } from 'react';
import PersonList from "./containers/PersonList/PersonList";
import Container from "react-bootstrap/Container";

class App extends Component {
  render() {
    return (
      <Container>
        <PersonList/>
      </Container>
    );
  }
}

export default App;
