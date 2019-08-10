import React, { Component } from 'react';
import PeepItem from './PeepItem'
import axios from 'axios';

export class Peeps extends Component {
  state = {
    peeps: []
  }

// viewing peeps
componentDidMount() {
    axios.get('https://chitter-backend-api.herokuapp.com/peeps')
    .then(res => this.setState({ peeps: res.data }))
}
  render() {
    return this.state.peeps.map((peep) => (
        <PeepItem key={peep.id} peep={peep}/>
    ));
  }
}

// prop types will go here
export default Peeps;