import React, { Component } from 'react';
import PersonListContainer from "./containers/PersonListContainer/PersonListContainer";
import Container from "react-bootstrap/Container";
import Header from "./components/Layout/Header/Header";
import Breadcrumb from "./components/Layout/Breadcrumb/Breadcrumb"
import Footer from "./components/Layout/Footer/Footer";
import Search from "./components/Search/Search"

class App extends Component {

  state = {
    filterText: '',
  }

 
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
