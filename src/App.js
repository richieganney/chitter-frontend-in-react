import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Peeps from './components/Peeps'
import About from './components/pages/About'
import Header from './components/layout/Header'
import ViewPeep from './components/ViewPeep';
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {

  return (
    <Router>

      <div className="App">
      <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Peeps />
          </React.Fragment>
        )} />
     
        <Route path="/single-peep" render={props => (
          <React.Fragment>
            <ViewPeep />
          </React.Fragment>
        )} />

        <Route path="/sign-up" render={props => (
          <React.Fragment>
            <SignUp />
          </React.Fragment>
        )} />

        <Route path="/login" render={props => (
          <React.Fragment>
            <Login />
          </React.Fragment>
        )} />

        {/* <Route path="/login" render={props => (
          <React.Fragment>
            <Login />
          </React.Fragment>
        )} /> */}

      <Route path="/about" component={About} />
      </div>

    </Router>
  );
}

export default App;
