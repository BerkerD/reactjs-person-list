import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PersonListContainer from "./containers/PersonListContainer/PersonListContainer";
import Container from "react-bootstrap/Container";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import AddPersonContainer from './containers/AddPersonContainer/AddPersonContainer';

class App extends Component {


  render() {
    return (
      <Container>
        <Header />
          <Switch>
            <Route exact path='/' component={PersonListContainer} />
            <Route path='/newperson' component={AddPersonContainer} />
          </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;
