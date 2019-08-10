import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Peeps from './components/Peeps'
import About from './components/pages/About'
import Header from './components/layout/Header'
import ViewPeep from './components/ViewPeep';

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
     
        <Route path="/1" render={props => (
          <React.Fragment>
            <ViewPeep />
          </React.Fragment>
        )} />

      <Route path="/about" component={About} />
      </div>

    </Router>
  );
}

export default App;
