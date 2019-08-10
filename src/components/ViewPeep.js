import React, { Component } from 'react'
import axios from 'axios';

export class ViewPeep extends Component {
    state = {
        singlePeep: []
      }
    componentDidMount() {
        axios.get('https://chitter-backend-api.herokuapp.com/peeps/900')
        .then(res => this.setState({ singlePeep: res.data }))
    }
    render() {
        console.log('look')
        console.log(this.state.singlePeep)
        return "hello"
       
      }
}

export default ViewPeep;
