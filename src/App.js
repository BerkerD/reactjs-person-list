import React, { Component } from 'react';
import PersonListContainer from "./containers/PersonListContainer/PersonListContainer";
import Container from "react-bootstrap/Container";
import Header from "./components/Layout/Header/Header";
import Breadcrumb from "./components/Layout/Breadcrumb/Breadcrumb"
import Footer from "./components/Layout/Footer/Footer";

class App extends Component {

  
  render() {
    return (
      <Container>
        <Header />
        <Breadcrumb title={"Person Title"} />      
        <PersonListContainer />
        <Footer />
      </Container>
    );
  }
}

export default App;
